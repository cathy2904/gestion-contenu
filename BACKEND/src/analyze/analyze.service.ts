import { Injectable, BadRequestException } from '@nestjs/common';
import { readFileSync } from 'fs';
import { OpenAI } from 'openai';
import * as pdf from 'pdf-parse';
import * as mammoth from 'mammoth';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import * as Tesseract from 'tesseract.js';
import * as xlsx from 'xlsx';
import * as pptxParser from 'pptx-parser';
import * as JSZip from 'jszip';
import { parseStringPromise } from 'xml2js';

//import { Analyze } from './schemas/analyze.schema';


@Injectable()
export class AnalyzeService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async analyze(file: Express.Multer.File) {
    let textContent: string;

    // Extraction du texte selon le type de fichier
    switch (file.mimetype) {
      case 'text/plain':
        textContent = readFileSync(file.path, 'utf-8');
        break;
        case 'application/pdf':
          try {
            const pdfBuffer = readFileSync(file.path);
            const pdfData = await pdf(pdfBuffer, {
              // PDF parsing options
              pagerender: async (pageData: any) => {
                const renderOptions = {
                  normalizeWhitespace: true,
                  disableCombineTextItems: false
                };
                return pageData.getTextContent(renderOptions);
              }
            });
            
            if (!pdfData.text || pdfData.text.trim().length === 0) {
              throw new Error('No text content found in PDF');
            }
            
            textContent = pdfData.text;
            console.log('PDF text extracted successfully');
          } catch (pdfError) {
            console.error('PDF parsing error:', pdfError);
            throw new BadRequestException(`Failed to parse PDF: ${pdfError.message}`);
          }
          break;
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        const { value } = await mammoth.extractRawText({ path: file.path });
        textContent = value;
        break;
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': // Excel (.xlsx)
        const workbook = xlsx.readFile(file.path);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        textContent = xlsx.utils.sheet_to_csv(sheet);
        break;
      case 'text/csv': // CSV
        textContent = await this.parseCsv(file.path);
        break;
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation': // PowerPoint (.pptx)
        textContent = await this.parsePptx(file.path);
        break;
      case 'image/jpeg':
      case 'image/png':
      case 'image/jpg': // Image OCR (JPEG/PNG)
        textContent = await this.extractTextFromImage(file.path);
        break;
      default:
        throw new Error('Format de fichier non supporté');
    }

    // Analyse avec OpenAI
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Tu es un assistant qui résume des documents de manière concise.',
        },
        {
          role: 'user',
          content: `Résume ce document en 3-5 phrases claires :\n\n${textContent}`,
        },
      ],
      temperature: 0.7,
    });

    return { summary: completion.choices[0].message.content };
  }

  // Méthode pour analyser un fichier CSV
  private async parseCsv(filePath: string): Promise<string> {
    const results: string[] = [];
    const fileStream = fs.createReadStream(filePath).pipe(csvParser());
    
    for await (const row of fileStream) {
      results.push(Object.values(row).join(', ')); // Join all fields in CSV row
    }

    return results.join('\n'); // Return as a text string
  }

  // Méthode pour analyser un fichier PowerPoint (.pptx)
  private async parsePptx(filePath: string): Promise<string> {
    try {
      const zip = new JSZip();
      const data = readFileSync(filePath);
      const pptx = await zip.loadAsync(data);
      
      // Get all slide files
      const slideFiles = Object.keys(pptx.files).filter(fileName => 
        fileName.startsWith('ppt/slides/slide') && fileName.endsWith('.xml')
      );
      
      let textContent = '';
      
      // Process each slide
      for (const slideFile of slideFiles) {
        const slideXml = await pptx.files[slideFile].async('string');
        const slideData = await parseStringPromise(slideXml);
        
        // Extract text from slide
        const slideTexts = this.extractTextFromSlideData(slideData);
        textContent += slideTexts.join(' ') + '\n\n';
      }
      
      return textContent.trim();
    } catch (error) {
      console.error('Error parsing PPTX:', error);
      throw new Error(`Failed to parse PowerPoint file: ${error.message}`);
    }
  }

  private extractTextFromSlideData(slideData: any): string[] {
    const texts: string[] = [];
    
    const traverse = (obj: any) => {
      if (Array.isArray(obj)) {
        obj.forEach(item => traverse(item));
      } else if (typeof obj === 'object') {
        if (obj['a:t']) {
          const text = Array.isArray(obj['a:t']) 
            ? obj['a:t'].join(' ')
            : obj['a:t'];
          if (text.trim()) {
            texts.push(text.trim());
          }
        }
        Object.values(obj).forEach(value => traverse(value));
      }
    };
    
    traverse(slideData);
    return texts;
  }

  // Méthode pour extraire le texte d'une image avec OCR (Tesseract.js)
  private async extractTextFromImage(filePath: string): Promise<string> {
    const result = await Tesseract.recognize(filePath, 'eng');
    return result.data.text;
  }
}