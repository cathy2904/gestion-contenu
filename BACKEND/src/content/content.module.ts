import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import {  ContentSchema } from './schemas/content.schema';
import { AiServiceModule } from '../ai-service/ai-service.module';
import { MongoService } from 'src/database/mongo.service';

@Module({
    imports: [  
      MongooseModule.forFeature([{ name: 'Content', schema: ContentSchema }]),

      AiServiceModule ],
      controllers: [ContentController],
      providers: [ContentService, MongoService],
    })

export class ContentModule {}
