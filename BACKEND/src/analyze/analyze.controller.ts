
import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AnalyzeService } from './analyze.service';


@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async analyzeFile(@UploadedFile() file: Express.Multer.File) {
    return this.analyzeService.analyze(file);
  }
  
}