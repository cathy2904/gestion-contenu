// src/modules/images/images.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { GeneratedImage, GeneratedImageSchema } from './schemas/generated-image.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: GeneratedImage.name, schema: GeneratedImageSchema }]),
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
