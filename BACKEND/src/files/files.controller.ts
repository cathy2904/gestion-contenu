import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    Get,
    Param,
    Res,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { Response } from 'express';
  import { join } from 'path';
  import { FilesService } from './files.service';
  
  @Controller('files')
  export class FilesController {
    constructor(private readonly fileService: FilesService) {}
  
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {}))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return {
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
      };
    }
  
    @Get(':imagepath')
    getImage(@Param('imagepath') imagepath: string, @Res() res: Response) {
      return res.sendFile(join(process.cwd(), 'uploads', imagepath));
    }
  }