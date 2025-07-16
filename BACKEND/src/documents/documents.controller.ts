import { Get, Query,Param, Delete, Put, Controller, Post, UseInterceptors, UploadedFile, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { OpenAI } from 'openai';
import { CreateDocumentDto } from './dto/create-document.dto';

import { multerConfig } from 'uploads/multer.config';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

//   @Post('upload')
//   @UseInterceptors(
//     FileInterceptor('file', {
//       storage: diskStorage({
//         destination: './uploads',
//         filename: (req, file, cb) => {
//           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//           cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
//         },
//       }),
//     }),
//   )
// //   async uploadAndProcess(@UploadedFile() file: Express.Multer.File, @Body('title') title: string) {
// //     return this.documentsService.extractAndSummarize(file.path, title);
// //   }
//   async uploadAndProcessgpt(@UploadedFile() file: Express.Multer.File, @Body('title') title: string) {
    

// //   console.log(' Fichier reçu:', file?.originalname);
// //   console.log(' Titre:', title);
//   try {
//       console.log(' Fichier reçu:', file?.originalname);
//   console.log(' Titre:', title);
//   return await this.documentsService.extractAndSummarize(file.path, title);
// } catch (error) {
//   return { error: error.message || 'Erreur lors du traitement du document' };
// }

// //   return this.documentsService.extractAndSummarize(file.path, title);
// }

// @Post('save')
// async saveDocument(@Body() body: { title: string, content: string, summary: string, analysis: string }) {
//   const newDoc = new this.docModel(body);
//   return newDoc.save();
// }

// Enregistrer un document manuellement après l'analyse
  @Post()
  async create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  //  @Post('uploads')
  // @UseInterceptors(FileInterceptor('file', multerConfig))
  // async uploadFile(@UploadedFile() file: Express.Multer.File, @Body('title') title: string) {
  //   return this.documentsService.handleUpload(file, title);
  // }
  // @Post('uploadClaude')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, cb) => {
  //         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
  //       },
  //     }),
  //     fileFilter: (req, file, cb) => {
  //       const allowedTypes = [
  //         'application/pdf',
  //         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  //         'application/vnd.ms-excel',
  //         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  //         'text/plain',
  //         'text/csv',
  //         'application/vnd.ms-powerpoint',
  //         'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  //       ];
  //       if (allowedTypes.includes(file.mimetype)) {
  //         cb(null, true);
  //       } else {
  //         cb(new BadRequestException('Format de fichier non pris en charge'), false);
  //       }
  //     },
  //   }),
  // )
  // async uploadAndProcessClaude(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body('title') title: string,
  // ) {
  //   if (!file) {
  //     throw new BadRequestException('Aucun fichier reçu');
  //   }
  //   if (!title || title.trim() === '') {
  //     throw new BadRequestException('Le titre est requis');
  //   }

  //   try {
  //     console.log('📁 Fichier reçu:', file.originalname);
  //     console.log('📝 Titre:', title);
  //     return await this.documentsService.extractAndSummarize(file.path, title);
  //   } catch (error: any) {
  //     console.error('❌ Erreur uploadAndProcess :', error);
  //     return { error: error.message || 'Erreur traitement Claude' };
  //   }
  // }



  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadAndProcess(
    @UploadedFile() file: Express.Multer.File,
    @Body('title') title: string,
    @Query('provider') provider: 'claude' | 'openai' = 'claude',
  ) {
    console.log('📨 Fichier reçu :', file?.originalname);
    console.log('📌 Titre :', title);
    console.log('🧠 Provider :', provider);

    try {
      if (!file || !file.path) {
        throw new Error('Aucun fichier valide reçu.');
      }

      const result = await this.documentsService.extractAndSummarize(
        file.path,
        title,
        provider,
      );

      return result;
    } catch (error) {
      console.error('❌ Erreur :', error.message || error);
      return {
        error: error.message || 'Erreur lors du traitement du document',
      };
    }
  }

//   @Post('analyze')
// @UseInterceptors(FileInterceptor('file', multerConfig))
// async analyzeOnly(@UploadedFile() file: Express.Multer.File) {
//   const content = await this.documentsService.extractTextClaude(file);
//   return this.documentsService.analyzeWithClaude(content);
// }

  @Get()
async getAll() {
  return this.documentsService.findAll();
}

@Get(':id')
async getOne(@Param('id') id: string) {
  return this.documentsService.findById(id);
}

@Delete(':id')
async remove(@Param('id') id: string) {
  return this.documentsService.delete(id);
}

@Put(':id')
async update(@Param('id') id: string, @Body() updateDto: { title?: string }) {
  return this.documentsService.update(id, updateDto);
}

}
