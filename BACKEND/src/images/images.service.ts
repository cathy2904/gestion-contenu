// src/modules/images/images.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { GenerateImageDto } from './dto/generate-image.dto';
import { GeneratedImage } from './schemas/generated-image.schema';
import { SaveImageDto } from './dto/save-image.dto';
import * as cloudinary from 'cloudinary';
import axios from 'axios';

@Injectable()
export class ImagesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectModel(GeneratedImage.name)
    private readonly imageModel: Model<GeneratedImage>
  ) {
    cloudinary.v2.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  async generateImage(dto: GenerateImageDto) {
    switch (dto.provider) {
      case 'openai':
        return this.generateWithOpenAI(dto);
      case 'deepseek':
        return this.generateWithDeepSeek(dto);
      default:
        throw new HttpException('Provider not supported', HttpStatus.BAD_REQUEST);
    }
  }

   private async uploadToCloudinary(imageUrl: string): Promise<string> {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64 = Buffer.from(response.data, 'binary').toString('base64');
    const dataURI = `data:image/png;base64,${base64}`;

    const upload = await cloudinary.v2.uploader.upload(dataURI, {
      folder: 'generated_images',
    });

    return upload.secure_url;
  }

  private async generateWithOpenAI(dto: GenerateImageDto) {
    const fullPrompt = dto.style ? `${dto.prompt}, style ${dto.style}` : dto.prompt;

    const response = await firstValueFrom(
      this.httpService.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: fullPrompt,
          n: dto.n || 1,
          size: dto.size || '512x512',
          response_format: 'url',
        },
        {
          headers: {
            Authorization: `Bearer ${this.configService.get('OPENAI_API_KEY')}`,
          },
        }
      )
    );
    const { data } = response;

    const results = data.data.map((img) => ({
      url: img.url,
      prompt: dto.prompt,
      fullPrompt,
      provider: 'openai',
      userId: dto.userId,
      createdAt: new Date(),
    }));

    return await this.imageModel.insertMany(results);
  }

  private async generateWithDeepSeek(dto: GenerateImageDto) {
    // Simulation d'une génération Deepseek
    const url = 'https://via.placeholder.com/512x512?text=DeepSeek+Image';
    const fullPrompt = dto.style ? `${dto.prompt}, style ${dto.style}` : dto.prompt;

    const result = {
      url,
      prompt: dto.prompt,
      fullPrompt,
      provider: 'deepseek',
      userId: dto.userId,
      createdAt: new Date(),
    };

    return [await this.imageModel.create(result)];
  }
  async saveGeneratedImage(data: SaveImageDto): Promise<GeneratedImage> {
  const newImage = new this.imageModel({
    prompt: data.prompt,
    url: data.url,
    provider: data.provider,
    userId: data.userId,
    createdAt: new Date(),
  });
  return await newImage.save();
}


  async findAllByUser(userId: string) {
    return this.imageModel.find({ userId }).sort({ createdAt: -1 });
  }
  async findAll(): Promise<GeneratedImage[]> {
    return this.imageModel.find().exec();  
  }
  async findById(id: string): Promise<GeneratedImage[]> {
    return this.imageModel.find({id}).exec();
  }

  async deleteImage(id: string): Promise<void> {
    await this.imageModel.findByIdAndDelete(id).exec();
  
  }
 
}
