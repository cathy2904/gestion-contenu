// src/modules/images/images.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ImagesService } from './images.service';
import { GenerateImageDto } from './dto/generate-image.dto';
import { SaveImageDto } from './dto/save-image.dto';
import { GeneratedImage } from './schemas/generated-image.schema';
import { JwtAuthGuard } from 'src/auth/guards/Jwt.guard';
import { Request } from 'express';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('generate')
  async generate(@Body() dto: GenerateImageDto) {
    return this.imagesService.generateImage(dto);
  }

  @Post('save')
async saveGeneratedImage(@Body() body: SaveImageDto) {
  return this.imagesService.saveGeneratedImage(body);
}
// @UseGuards(JwtAuthGuard)
//   @Post('save')
//   async saveGeneratedImage(@Req() req: Request, @Body() body: any) {
//     const user = req.user as any;
//     const userId = user._id; // ou user.id selon ton JWT
//     return this.imagesService.saveGeneratedImage(body, userId);
//   }

  @Get()
  // @ApiOperation({ summary: 'Récupérer toutes les images générées' })
  async getAllImages(): Promise<GeneratedImage[]> {
    return this.imagesService.findAll();
  }

  @Get(':id')
  // @ApiOperation({ summary: 'Récupérer une image par ID' })
  async getImageById(@Param('id') id: string): Promise<GeneratedImage[]> {
    return this.imagesService.findById(id);
  }

  @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // @ApiOperation({ summary: 'Supprimer une image' })
  async deleteImage(@Param('id') id: string): Promise<void> {
    return this.imagesService.deleteImage(id);
  }

@Get()
  async findAll() {
    return this.imagesService.findAll();
  }

}
