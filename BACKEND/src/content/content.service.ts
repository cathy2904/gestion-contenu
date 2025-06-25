import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OpenAI } from 'openai';
import Configuration from "openai";
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
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { UpdateContentDto } from './dto/update-content.dto';

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


async generateContent(title: string, style: string, length: string, provider: string, platform: string): Promise<string> {
  console.log('Début de la génération...', { title, style, length, provider, platform });

  const prompt = `Rédige un article ${style}, de longueur ${length}, sur le sujet : "${title}" pour cette plateforme : ${platform} `;

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
      async scheduleContent(id: string, dto: UpdateScheduleDto): Promise<Content> {
    const content = await this.contentModel.findById(id);
    if (!content) {
      throw new NotFoundException('Contenu non trouvé');
    }

    content.publicationDate = new Date(dto.publicationDate);
    content.statut = 'programmé';
    return content.save();
  }
  async getOne(id: string): Promise<Content> {
    const content = await this.contentModel.findById(id).exec();
    if (!content) {
      throw new NotFoundException(`Contenu avec l'ID ${id} non trouvé`);
    }
    return content;
  }
  async updateSchedule(id: string, dto: UpdateScheduleDto): Promise<Content> {
    const updateData: any = {
      publicationDate: new Date(dto.publicationDate),
      statut: 'programmé',
    };

    if (dto.title) updateData.title = dto.title;
    if (dto.content) updateData.content = dto.content;

    const updated = await this.contentModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException(`Contenu avec l'id ${id} introuvable`);
    }

    return updated;
  }



async update(id: string, updateContentDto: UpdateContentDto): Promise<Content> {
    const updated = await this.contentModel.findByIdAndUpdate(id, updateContentDto, {
      new: true,
    });
    if (!updated) {
      throw new NotFoundException(`Contenu avec l'id ${id} introuvable`);
    }
    return updated;
  }

  async findById(id: string) {
    return this.contentModel.findById(id);
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

//  Mise à jour du statut
  // async updateStatus(id: string, statut: string) {
  //   return this.contentModel.findByIdAndUpdate(id, { statut }, { new: true });
  // }

  // 📊 Statistiques pour le dashboard
  // async getStats() {
  //   const byStatut = await this.contentModel.aggregate([
  //     { $group: { _id: '$statut', count: { $sum: 1 } } },
  //   ]);

  //   const byStyle = await this.contentModel.aggregate([
  //     { $group: { _id: '$style', count: { $sum: 1 } } },
  //   ]);

  //   const byChannel = await this.contentModel.aggregate([
  //     { $group: { _id: '$channel', count: { $sum: 1 } } },
  //   ]);

  //   return {
  //     total: await this.contentModel.countDocuments(),
  //     byStatut,
  //     byStyle,
  //     byChannel,
  //   };
  // }

// async getStats(statut?: string, date?: string) {
//   try {
//     const filter: any = {};
//     if (statut) filter.statut = statut;
//     if (date) {
//       const start = new Date(date);
//       const end = new Date(date);
//       end.setHours(23, 59, 59, 999);
//       filter.createdAt = { $gte: start, $lte: end };
//     }

//     const total = await this.contentModel.countDocuments(filter);
//     const byStatus = await this.contentModel.aggregate([
//       { $match: filter },
//       { $group: { _id: '$statut', count: { $sum: 1 } } },
//     ]);
//     const byPlatform = await this.contentModel.aggregate([
//   { $match: { ...filter, platform: { $exists: true, $ne: null } } },
//   { $group: { _id: '$platform', count: { $sum: 1 } } },
// ]);


//     return { total, byStatus, byPlatform };
//   } catch (error) {
//     console.error('Erreur lors du calcul des stats :', error);
//     throw new InternalServerErrorException('Erreur serveur');
//   }
// }

async getStats(statut?: string, date?: string) {
  try {
    const filter: any = {};

    if (statut) {
      filter.statut = statut;
    }

    if (date && !isNaN(Date.parse(date))) {
      const start = new Date(date);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      filter.createdAt = { $gte: start, $lte: end };
    }

    const total = await this.contentModel.countDocuments(filter);
    const byStatus = await this.contentModel.aggregate([
      { $match: filter },
      { $group: { _id: '$statut', count: { $sum: 1 } } },
    ]);
    const byPlatform = await this.contentModel.aggregate([
      { $match: { ...filter, platform: { $exists: true } } },
      { $group: { _id: '$platform', count: { $sum: 1 } } },
    ]);

    return { total, byStatus, byPlatform };
  } catch (error) {
    console.error('❌ Erreur dans getStats :', error); // 🔥 Affiche l'erreur dans le terminal
    throw new InternalServerErrorException('Erreur interne');
  }
}


async publishToSocialMedia(id: string) {
  const content = await this.contentModel.findById(id);
  if (!content) throw new NotFoundException('Contenu introuvable');

  // for (const platform of content.platforms) {
  //   switch (platform) {
  //     case 'facebook':
  //       await this.facebookService.postContent(content);
  //       break;
  //     case 'linkedin':
  //       await this.linkedinService.postContent(content);
  //       break;
  //     case 'twitter':
  //       await this.twitterService.postContent(content);
  //       break;
  //   }
  }

  // content.statut = 'publié';
  // content.publicationDate = new Date();
  // return content.save();
// }

 


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
