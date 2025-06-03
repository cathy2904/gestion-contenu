import { Get, Param, Delete, Put, Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { OpenAI } from 'openai';
import { CreateDocumentDto } from './dto/create-document.dto';


@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

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
//   async uploadAndProcess(@UploadedFile() file: Express.Multer.File, @Body('title') title: string) {
//     return this.documentsService.extractAndSummarize(file.path, title);
//   }
  async uploadAndProcess(@UploadedFile() file: Express.Multer.File, @Body('title') title: string) {
    

//   console.log(' Fichier reçu:', file?.originalname);
//   console.log(' Titre:', title);
  try {
      console.log(' Fichier reçu:', file?.originalname);
  console.log(' Titre:', title);
  return await this.documentsService.extractAndSummarize(file.path, title);
} catch (error) {
  return { error: error.message || 'Erreur lors du traitement du document' };
}

//   return this.documentsService.extractAndSummarize(file.path, title);
}

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
