import { Controller, Post, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ContentService } from './content.service';
import { GenerateContentDto } from './dto/generate-content.dto';
import { CreateContentDto } from './dto/create-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  // @Post('generate')
  // async generate(@Body() dto: GenerateContentDto) {
  //   return this.contentService.generateContent(dto);
  // }

  @Post('generate')
  async generateContent(@Body() body: GenerateContentDto) {
    const { title, style, length, provider } = body;

    if (!title || !style || !length || !provider) {
      throw new HttpException('Données manquantes pour générer le contenu.', HttpStatus.BAD_REQUEST);
    }

    const apiKey =
      provider === 'openai'
            ? process.env.OPENAI_API_KEY
            : provider === 'deepseek'
            ? process.env.DEEPSEEK_API_KEY
            : '';

    const url =
      provider === 'openai'
        ? 'https://api.openai.com/v1/chat/completions'
        : provider === 'deepseek'
        ? 'https://api.deepseek.com/chat/completions'
        : '';

    if (!apiKey || !url) {
      throw new HttpException('Clé API ou fournisseur invalide.', HttpStatus.BAD_REQUEST);
    }

    const prompt = `Écris un article intitulé "${title}" avec un style ${style} et une longueur ${length}.`;

    const requestBody =
      provider === 'openai'
        ? {
            model: 'gpt-4o',
            messages: [
              { role: 'system', content: 'Tu es un rédacteur professionnel.' },
              { role: 'user', content: prompt },
            ],
            max_tokens: 1000,
          }
        : provider === 'deepseek'
        ? {
            model: 'deepseek-chat',
            message: prompt,
            max_tokens: 1000,
          }
        : {};

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      const generated =
        provider === 'openai'
          ? result?.choices?.[0]?.message?.content
          : result?.choices?.[0]?.message || result?.output;

      if (!generated) {
        throw new HttpException('La génération a échoué.', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      return { content: generated };
    } catch (error) {
      console.error('Erreur lors de la génération :', error);
      throw new HttpException('Erreur pendant la génération du contenu.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
//   @Post('generate')
// async generateContent(@Body() body: GenerateContentDto) {
//   const { title, style, length, provider } = body;

//   const prompt = `Écris un article intitulé "${title}" avec un style ${style} et une longueur ${length}.`;
  

//   const apiKey =
//     provider === 'openai'
//       ? process.env.OPENAI_API_KEY
//       : provider === 'deepseek'
//       ? process.env.DEEPSEEK_API_KEY
//       : '';

//   const url =
//     provider === 'openai'
//       ? 'https://api.openai.com/v1/chat/completions'
//       : provider === 'deepseek'
//       ? 'https://api.deepseek.com/chat/completions'
//       : '';

//   const model =
//     provider === 'openai' ? 'gpt-4o' : 'deepseek-chat';

//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${apiKey}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       model,
//       messages: [
//         { role: 'system', content: 'Tu es un rédacteur professionnel.' },
//         { role: 'user', content: prompt },
//       ],
//       max_tokens: 1000,
//     }),
//   });

//   const data = await res.json();
//   return { content: data.choices?.[0]?.message?.content };
// }


  @Post()
  async create(@Body() dto: CreateContentDto) {
    return this.contentService.create(dto);
  }

  @Get()
  async findAll() {
    return this.contentService.findAll();
  }
}

// import {
//     Controller,
//     Get,
//     Post,
//     Body,
//     Param,
//     Delete,
//     HttpCode,
//     HttpStatus,
//   } from '@nestjs/common';
//   import { ContentService } from './content.service';
//   import { Content } from './interfaces/content.interface';
//   import { CreateContentDto } from './dto/create-content.dto';
//   import { GenerateContentDto } from './dto/generate-content.dto';
//   import { ContentSchema } from './schemas/content.schema';
  
//   @Controller('content')
//   export class ContentController {
//     constructor(private readonly contentService: ContentService) {}
  
//     @Get()
//     async findAll(){
    
//     return this.contentService.findAll();
    
//     }
  
//     @Get(':id')
//     async findOne(@Param('id') id: string) {
//     //   return this.contentService.findOne(id);
//     return this.contentService.findOne(id);
      
//     }
  
//     @Post()
//     async create(@Body() createContentDto: CreateContentDto) {
//       return this.contentService.create(createContentDto);
//     }
  
//     @Post('generate')
//     @HttpCode(HttpStatus.OK)
//     async generateContent(@Body() generateContentDto: GenerateContentDto): Promise<{ content: string }> {
//       const content = await this.contentService.generateContentOnly(generateContentDto);
//       return { content };
//     }
  
//     @Delete(':id')
//     async remove(@Param('id') id: string) {
//       return this.contentService.remove(id);
//     }
//   }