import { BadRequestException, Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import Configuration from "openai";
// import removeMarkdown from 'remove-markdown';
// import * as removeMarkdown from 'remove-markdown';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './schemas/content.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenerateContentDto } from './dto/generate-content.dto';
import { AiServiceService } from '../ai-service/ai-service.service';
import { InternalServerErrorException } from '@nestjs/common';
import { MongoService } from 'src/database/mongo.service';
import { Collection } from 'mongodb';
import axios from 'axios';
const removeMarkdown = require('remove-markdown');
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ContentService {
  // contentModel: any;
 private readonly openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  constructor(private readonly mongoService: MongoService,
     @InjectModel('Content') private readonly contentModel: Model<Content>) {}
  

  private async getCollection(): Promise<Collection<Document>> {
        const db = this.mongoService.getDatabase();
        if (!db) throw new Error('Database connection not established');
        return db.collection('contents');
      }
   

  async findAll(
  filter: any,
  page = 1,
  limit = 10,
  statut?: string, style?: string
): Promise<{ contents: Content[]; totalPages: number; page: number }> {
  const skip = (page - 1) * limit;

  const query = this.contentModel.find(filter).sort({ createdAt: -1 });

  const [contents, total] = await Promise.all([
    query.skip(skip).limit(limit).exec(),
    this.contentModel.countDocuments(filter),
  ]);

  const totalPages = Math.ceil(total / limit);
  return { contents, totalPages, page };
}

  
private async callProviderAPI(prompt: string, provider: string): Promise<string> {
  console.log(`Appel API vers ${provider}...`);

  if (provider === 'gpt-4' || provider === 'gpt-4o') {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: provider,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    );

    return res.data.choices[0].message.content ?? 'Pas de contenu généré.';
  }

  if (provider === 'deepseek') {
    const res = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
      },
    );

    return res.data.choices[0].message.content ?? 'Pas de contenu généré.';
  }

  throw new BadRequestException(`Fournisseur non supporté: ${provider}`);
}


async generateContent(title: string, style: string, length: string, provider: string): Promise<string> {
  console.log('Début de la génération...', { title, style, length, provider });

  const prompt = `Rédige un article ${style}, de longueur ${length}, sur le sujet : "${title}"`;

  try {
    const response = await this.callProviderAPI(prompt, provider);
    console.log('Réponse GPT :', response);
    const plainText = removeMarkdown(response); 
    // return response;
    return plainText;
  } catch (err) {
    console.error('Erreur lors de la génération :', err);
    throw new InternalServerErrorException('Erreur lors de la génération');
  }
}

   async saveContent(createContentDto: CreateContentDto): Promise<Content> {
       const createdContent = new this.contentModel(createContentDto);
       return createdContent.save();
     }

     // Publie automatiquement les contenus planifiés
@Cron(CronExpression.EVERY_MINUTE)
async publishScheduledContent() {
  const now = new Date();
  const contents = await this.contentModel.find({
    scheduledDate: { $lte: now },
    statut: 'programmé',
  });

  for (const content of contents) {
    content.statut = 'publié';
    await content.save();
    console.log(`[AUTO] Publié : ${content.title}`);
  }
}
//   async findAll(): Promise<Content[]> {
//   try {
//     const data = await this.contentModel.find().sort({ createdAt: -1 }).exec();
//     console.log("✔️ Contenus trouvés :", data);
//     return data;
//   } catch (error) {
//     console.error("❌ Erreur dans ContentService.findAll():", error);
//     throw new InternalServerErrorException("Erreur serveur lors de la récupération des contenus");
//   }
// }
// async findAll(): Promise<Content[]> {
//     return this.contentModel.find().exec();  // ✅ Renvoyer la liste
//   }


}
