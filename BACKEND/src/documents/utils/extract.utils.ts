import * as fs from 'fs';
import * as path from 'path';
import * as pdfParse from 'pdf-parse';
import * as mammoth from 'mammoth';
import * as xlsx from 'xlsx';
import { parse as parseCSV } from 'csv-parse/sync';
import { extractText as extractPptxText } from 'pptx-parser';

export async function extractTextFromFile(filePath: string): Promise<string> {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = fs.readFileSync(filePath);

  switch (ext) {
    case '.pdf': {
      const data = await pdfParse(buffer);
      return data.text;
    }

    case '.docx': {
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    }

    case '.csv': {
      const text = buffer.toString();
      const records = parseCSV(text, { columns: false });
      return records.map((row: any) => row.join(' ')).join('\n');
    }

    case '.xlsx': {
      const workbook = xlsx.read(buffer, { type: 'buffer' });
      return workbook.SheetNames.map(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        return xlsx.utils.sheet_to_csv(sheet);
      }).join('\n');
    }

    case '.pptx': {
      const slides = await extractPptxText(filePath);
      return slides.map(slide => slide.text).join('\n');
    }

    case '.txt': {
      return buffer.toString('utf-8');
    }

    default:
      throw new Error(`Format de fichier non supporté : ${ext}`);
  }
}
