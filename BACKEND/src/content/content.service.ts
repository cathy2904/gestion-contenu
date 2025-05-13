import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content } from './schemas/content.schema';
import { CreateContentDto } from './dto/create-content.dto';
import { GenerateContentDto } from './dto/generate-content.dto';
import { AiServiceService } from '../ai-service/ai-service.service';

@Injectable()
export class ContentService {
  contentModel: any;
  aiService: any
  // constructor(

  //ce code cause une erreur d'importation du model
  //   @InjectModel('Content') 
  //   private readonly contentModel: Model<Content>,
  //   private readonly aiService: AiServiceService,
  // ) {console.log('✅ ContentService initialisé');}

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const created = new this.contentModel(createContentDto);
    return created.save();
  }

  async generateContent(dto: GenerateContentDto): Promise<Content> {
    const generated = await this.aiService.generate(dto);
    const content = await this.create({ ...dto, body: generated });
    return content;
  }

  async findAll(): Promise<Content[]> {
    return this.contentModel.find().exec();
  }
}








// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Content, ContentDocument } from './schemas/content.schema';
// import { CreateContentDto } from './dto/create-content.dto';
// import { GenerateContentDto } from './dto/generate-content.dto';
// import { AiServiceService } from '../ai-service/ai-service.service';

// @Injectable()
// export class ContentService {
//   constructor(
//     @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
//     private aiServiceService: AiServiceService,
//   ) {}

//   async findAll(): Promise<Content[]> {
//     return this.contentModel.find().sort({ createdAt: -1 }).exec();
//   }

//   async findOne(id: string): Promise<Content> {
//     // return this.contentModel.findById(id).exec();
//     const content = await this.contentModel.findById(id).exec();
//     if (!content) {
//       throw new NotFoundException(`Article with ID ${id} not found`);
//     }
//     return content;
//   }

//   async create(createContentDto: CreateContentDto): Promise<Content> {
//     // Génération du contenu via le service AI
//     const generatedContent = await this.aiServiceService.generateContent(
//       createContentDto.prompt,
//       createContentDto.textStyle,
//       createContentDto.textLength,
//       createContentDto.aiProvider,
//     );

//     // Création de l'entrée en base de données
//     const newContent = new this.contentModel({
//       title: createContentDto.title,
//       content: generatedContent.content,
//       textStyle: createContentDto.textStyle,
//       textLength: createContentDto.textLength,
//       aiProvider: createContentDto.aiProvider,
//     });

//     return newContent.save();
//   }

//   async generateContentOnly(generateContentDto: GenerateContentDto): Promise<string> {
//     const generatedContent = await this.aiServiceService.generateContent(
//       generateContentDto.prompt,
//       generateContentDto.textStyle,
//       generateContentDto.textLength,
//       generateContentDto.aiProvider,
//     );

//     return generatedContent.content;
//   }

//   async remove(id: string): Promise<Content> {
//     // return this.contentModel.findByIdAndDelete(id).exec();
//     const deletedContent = await this.contentModel.findByIdAndDelete(id).exec();
//         if (!deletedContent) {
//           throw new NotFoundException(`Article with ID ${id} not found`);
//         }
//         return deletedContent;
//       }
  
// }