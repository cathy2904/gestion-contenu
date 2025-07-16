import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Document } from './schemas/document.schema';
import * as fs from 'fs';
import { readFile } from 'fs/promises';

import * as pdfParse from 'pdf-parse';
import { chunkTextByToken, countTokens } from './utils/text.utils';
import { MongoService } from 'src/database/mongo.service';
import { Collection } from 'mongodb';
import * as textract from 'textract';
import * as fileType from 'file-type';
import OpenAI from 'openai';
import { extractTextFromFile } from './utils/extract.utils';
import { CreateDocumentDto } from './dto/create-document.dto';
import mammoth from 'mammoth';
import { createReadStream } from 'fs';
import * as csv from 'csv-parser';
import * as xlsx from 'xlsx';

const MAX_TOKENS = 3000;
const MAX_SUMMARY_TOKENS = 1000;

@Injectable()
export class DocumentsService {
    
    constructor(private readonly mongoService: MongoService,
         @InjectModel('Document') private readonly docModel: Model<Document>) {}
      
    
      private async getCollection(): Promise<Collection<Document>> {
            const db = this.mongoService.getDatabase();
            if (!db) throw new Error('Database connection not established');
            return db.collection('contents');
          }

  async findAll() {
  return this.docModel.find().sort({ createdAt: -1 }).exec();
}

async findById(id: string) {
  return this.docModel.findById(id).exec();
}

async delete(id: string) {
  return this.docModel.findByIdAndDelete(id).exec();
}

async update(id: string, updateDto: { title?: string }) {
  return this.docModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
}

// async extractText(buffer: Buffer, filePath: string): Promise<string> {
//    console.log('📥 Tentative d\'extraction PDF');
//   const type = await pdfParse(buffer);
//   const mime = type?.mime || '';

//   // OCR image si c’est une image
//   if (mime.startsWith('image/')) {
//      console.log('🖼️ OCR sur image');
//     const Tesseract = await import('tesseract.js');
//     const result = await Tesseract.recognize(buffer, 'eng');
//     return result.data.text;
//   }

//   // PDF
//   if (mime === 'application/pdf') {
//     const data = await pdfParse(buffer);
//      console.log('✅ PDF extrait');
//     return data.text;
//   }

//   // Tous les autres formats (Word, PPT, Excel, TXT, etc.)
//   return new Promise((resolve, reject) => {
//     textract.fromFileWithPath(filePath, (err, text) => {
//       if (err) return reject(err);
//       resolve(text);
//     });
//   });
// }


// async create(createDto: CreateDocumentDto): Promise<Document> {
//     const doc = new this.docModel(createDto);
//     return doc.save();
//   }

//   async extractAndSummarize(filePath: string, title: string) {
//     console.log('🚀 Début de extractAndSummarize');
//     const buffer = fs.readFileSync(filePath);
//     const pdfData = await pdfParse(buffer);
//     const text = pdfData.text;
// // const text = await this.extractText(buffer, filePath);
//  console.log('✅ Texte extrait :', text.slice(0, 200));


//     if (!text) throw new Error('Document vide');

//     const chunks = chunkTextByToken(text, MAX_TOKENS);
//     console.log('🧩 Chunks générés :', chunks.length);

//     // const summaries = [];
//     const summaries: string[] = [];
//    for (let i = 0; i < chunks.length; i++) {
//   const chunk = chunks[i];
//   console.log(` Résumé du chunk ${i + 1}/${chunks.length}...`);
//   const summary = await this.summarizeText(chunk);
//   summaries.push(`Résumé ${i + 1}:\n${summary}`);
// }


//     const combined = summaries.join('\n\n');
//     console.log('📚 Résumé combiné (extrait) :', combined.slice(0, 200));
    
//     if (countTokens(combined) > MAX_TOKENS) {
//       throw new Error('Résumé trop long');
//     }

//     // const finalSummary = await this.summarizeText(combined);
//      const analysis = await this.analyzeText(combined);



//     const newDoc = new this.docModel({
//       title,
//       content: text,
//       summary: combined,
//       analysis: analysis,
//     });
//     await newDoc.save();
//     console.log('✅ Document enregistré dans MongoDB');
//     return newDoc;
//   }

  

//   private async summarizeText(text: string) {
//     const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//      try {
//     console.log('🚀 Début appel OpenAI...');

//     const response = await openai.chat.completions.create({
//       model: 'gpt-4',
//       messages: [
//         { role: 'system', content: 'Tu es un assistant qui résume des documents.' },
//         { role: 'user', content: `Résumer ce texte en environ ${MAX_SUMMARY_TOKENS} tokens :\n${text}` },
//       ],
//       max_tokens: MAX_SUMMARY_TOKENS,
//     });
//     // console.log('🔑 Clé OpenAI chargée ?', process.env.OPENAI_API_KEY ? 'oui' : 'non');
//      console.log('✅ Résumé reçu');
//     return response.choices[0].message.content;
    
//      } catch (error) {
//     console.error('❌ Erreur dans summarizeText :', error.message || error);
//     throw error;
//   }
//   }

//   private async analyzeText(text: string) {
//     const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//     const response = await openai.chat.completions.create({
//       model: 'gpt-4',
//       messages: [
//         { role: 'system', content: 'Tu es un assistant qui analyse des documents.' },
//         { role: 'user', content: `Analyse ce texte :\n${text}` },
//       ],
//       max_tokens: 2000,
//     });
//     return response.choices[0].message.content;
//   }

  ///////////DEBUT AVEC CLAUDE AI

   async extractText(buffer: Buffer, filePath: string): Promise<string> {
    console.log('📥 Extraction de texte');
    const type = await pdfParse(buffer);
    const mime = type?.mime || '';

    if (mime.startsWith('image/')) {
      const Tesseract = await import('tesseract.js');
      const result = await Tesseract.recognize(buffer, 'eng');
      return result.data.text;
    }

    if (mime === 'application/pdf') {
      const data = await pdfParse(buffer);
      return data.text;
    }

    return new Promise((resolve, reject) => {
      textract.fromFileWithPath(filePath, (err, text) => {
        if (err) return reject(err);
        resolve(text);
      });
    });
  }

  async create(createDto: CreateDocumentDto): Promise<Document> {
    const doc = new this.docModel(createDto);
    return doc.save();
  }

  async extractAndSummarize(filePath: string, title: string, provider: 'claude' | 'openai') {
    console.log('🚀 Début traitement document avec :', provider);
    const buffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(buffer);
    const text = pdfData.text;

    if (!text) throw new Error('Document vide');
    console.log('✅ Texte extrait :', text.slice(0, 200));

    const chunks = chunkTextByToken(text, MAX_TOKENS);
    console.log('🧩 Nombre de chunks :', chunks.length);

    const summaries: string[] = [];
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      console.log(`📝 Résumé chunk ${i + 1}`);
      const summary = await this.summarizeText(chunk, provider);
      summaries.push(`Résumé ${i + 1}:
${summary}`);
    }

    const combined = summaries.join('\n\n');
    console.log('📚 Résumé combiné extrait :', combined.slice(0, 200));

    if (countTokens(combined) > MAX_TOKENS) {
      throw new Error('Résumé trop long');
    }

    const analysis = await this.analyzeText(combined, provider);
    console.log('🔍 Analyse générée');

    const newDoc = new this.docModel({
      title,
      content: text,
      summary: combined,
      analysis,
    });
    await newDoc.save();
    console.log('💾 Document enregistré');
    return newDoc;
  }

  private async summarizeText(text: string, provider: 'openai' | 'claude') {
  if (provider === 'openai') {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Tu es un assistant qui résume des documents.' },
        { role: 'user', content: `Résume ce texte :\n${text}` },
      ],
      max_tokens: MAX_SUMMARY_TOKENS,
    });
    return response.choices[0].message.content;
  } else {
    const response = await fetch('https://api.anthropic.com/v1/complete', {  // <-- endpoint corrigé
      method: 'POST',
      headers: {
        // 'x-api-key': process.env.CLAUDE_API_KEY,
         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens_to_sample: MAX_SUMMARY_TOKENS,
        prompt: `\n\nHuman: Résume ce texte :\n${text}\n\nAssistant:`,
      }),
    });
    const result = await response.json();

    // Extraire le texte généré par Claude
    return result.completion || '';  // <-- c’est dans `completion`
  }
}

private async analyzeText(text: string, provider: 'openai' | 'claude') {
  if (provider === 'openai') {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Tu es un assistant qui analyse des documents.' },
        { role: 'user', content: `Analyse ce texte :\n${text}` },
      ],
      max_tokens: 2000,
    });
    return response.choices[0].message.content;
  } else {
    const response = await fetch('https://api.anthropic.com/v1/complete', {  // <-- endpoint corrigé
      method: 'POST',
      headers: {
        // 'x-api-key': process.env.CLAUDE_API_KEY,
         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens_to_sample: 2000,
        prompt: `\n\nHuman: Analyse ce texte :\n${text}\n\nAssistant:`,
      }),
    });
    const result = await response.json();

    return result.completion || '';
  }
}






  // async handleUpload(file: Express.Multer.File, title: string) {
  //   const content = await this.extractTextClaude(file);
  //   const { summary, analysis } = await this.analyzeTextClaude(content);

  //   const newDoc = new this.docModel({ title, summary, analysis });
  //   return newDoc.save();
  // }
 
  
}
