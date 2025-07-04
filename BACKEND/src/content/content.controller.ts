import { Controller, Post, Body, Get, HttpException, HttpStatus, Query, Req, Param, Patch, Put, NotFoundException, UseInterceptors, UploadedFiles, UploadedFile, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContentService } from './content.service';
import { GenerateContentDto } from './dto/generate-content.dto';
import { CreateContentDto } from './dto/create-content.dto';
import { title } from 'process';
import { Model } from 'mongoose';
import { Content } from './schemas/content.schema';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { platform } from 'os';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import * as multer from 'multer';
import cloudinary from './../cloudinary/cloudinary.config';
import { JwtAuthGuard } from 'src/auth/guards/Jwt.guard';
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  
    params: async (req, file) => ({
    folder: 'content_media',
    resource_type: 'auto',
    allowed_formats: ['jpg', 'png', 'jpeg', 'mp4', 'mov'],
  }),
  
});

@Controller('content')
export class ContentController {
  // constructor(private readonly contentService: ContentService) {}
   constructor(
    private readonly contentService: ContentService,
    @InjectModel('Content') private readonly contentModel: Model<Content>,
  ) {}

  //  @Get()
  // findAll() {
  //   return this.contentService.findAll();
  // }

  @Get()
async findAll(
  @Query('page') page = '1',
  @Query('limit') limit = '10',
  @Query('user') user?: string,
  @Query('style') style?: string,
  @Query('date') date?: string,
  @Query('statut') statut?: string,
  @Query('platform') platform?: string,
) {
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  const filter: any = {};
  if (user) filter.user = user;
  if (style) filter.style = style;
   if (statut) filter.statut = statut;
   if (platform) filter.platform = platform;
  // if (date) filter.createdAt = { $gte: new Date(date) };
  if (date) {
    const start = new Date(date);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    filter.createdAt = { $gte: start, $lte: end };
  }

  return this.contentService.findAll(filter, pageNum, limitNum, statut, style);
}


  @Get()
async getAllContents(@Query() query: any) {
  const { user, style, date, platform } = query;
  const filter: any = {};

  if (user) filter.user = user;
  if (style) filter.style = style;
  if (platform) filter.platform = platform;
  if (date) filter.createdAt = { $gte: new Date(date) };

  return this.contentService.findAll(filter);
}

@Post('idea')
async saveIdea(@Body('title') title: string) {
  return this.contentService.saveContent({
    title,
    statut: 'idée', 
  });
}
@Get('ideas')
async getIdeas() {
  return this.contentService.getDrafts();
}



// @Get('suggestions')
// async getSuggestions() {
//   const suggestions = await this.contentService.getSuggestionsFromRecentContents();
//   return { suggestions };
// }

@Get('suggestions')
async getGeneratedTitleSuggestions() {
  const suggestions = await this.contentService.generateSimilarTitleSuggestions();
  return { suggestions };
}



// @Post('generate-image')
// async generateImage(@Body('prompt') prompt: string) {
//   const imageUrl = await this.contentService.generateImage(prompt);
//   return { imageUrl };
// }
  
  @Post()
  async saveContent(@Body() createContentDto: CreateContentDto) {
    return this.contentService.saveContent(createContentDto);
  }
//   @Post()
// async saveContent(@Body() createContentDto: CreateContentDto, @Req() req) {
//   const userId = req.user?.id || '664012345abc...'; // Remplace par un vrai ObjectId pour test
//   return this.contentService.saveContent({ ...createContentDto, user: userId });
// }


   @Post('generate')
  async generateContent(@Body() body: any) {
    const { title, style, length, provider, platform } = body;
    const content = await this.contentService.generateContent(title, style, length, provider, platform);

    return { content };
  }
  //  Dashboard stats
  @Get('stats')
  async getStats(
    @Query('statut') statut?: string,
  @Query('date') date?: string,
  ) {
    return this.contentService.getStats(statut, date);
  }
   @Get(':id')
  async getOne(@Param('id') id: string): Promise<Content> {
    return this.contentService.getOne(id);
  }


  // @Put('/schedule/:id')
  // async schedule(
  //   @Param('id') id: string,
  //   @Body() dto: UpdateScheduleDto,
  // ) {
  //   return this.contentService.scheduleContent(id, dto);
  // }

  //  @Get('/schedule/:id')
  // async getSchedule(@Param('id') id: string) {
  //   const content = await this.contentService.findById(id);
  //   if (!content) {
  //     throw new NotFoundException('Contenu non trouvé');
  //   }
  //   return { publicationDate: content.publicationDate };
  // }


  //modif du titre, contenu
//  @Put(':id')
//   async update(
//     @Param('id') id: string,
//     @Body() updateContentDto: UpdateContentDto,
//   ) {
//     return this.contentService.update(id, updateContentDto);
//   }

  // @Put(':id')
  // @UseInterceptors(
  //   FileFieldsInterceptor(
  //     [{ name: 'media', maxCount: 10 }],
  //     {
  //       storage: diskStorage({
  //         destination: './uploads', // Dossier où les fichiers seront stockés
  //         filename: (req, file, callback) => {
  //           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  //           const ext = extname(file.originalname);
  //           const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
  //           callback(null, filename);
  //         },
  //       }),
  //     },
  //   ),
  // )
  // async updateContent(
  //   @Param('id') id: string,
  //   @UploadedFiles() files: { media?: Express.Multer.File[] },
  //   @Req() req: any,
  // ) {
  //   const { title, content } = req.body;

  //   const mediaPaths = files?.media?.map(file => file.filename) || [];

  //   return this.contentService.update(id, {
  //     title,
  //     content,
  //     media: mediaPaths,
      
  //   });
  // }
  
//   @Put(':id')
// @UseInterceptors(
//   FilesInterceptor('files', 10, {
//     storage: Storage as any,
//     fileFilter: (req, file, cb) => {
//       if (
//         file.mimetype.startsWith('image/') ||
//         file.mimetype.startsWith('video/')
//       ) {
//         cb(null, true);
//       } else {
//         cb(new Error('Invalid file type'), false);
//       }
//     },
//   }),
// )
// async updateContent(
//   @Param('id') id: string,
//   @UploadedFiles() files: Express.Multer.File[],
//   @Body() body: any,
// ) {
//   const mediaUrls = files.map((f) => f?.path);
//   const updateData = {
//     ...body,
//     media: mediaUrls,
//   };

//   return this.contentService.update(id, updateData);
// }

@Put(':id')
  @UseInterceptors(FilesInterceptor('media', 10, { storage }))
  async updateContent(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: any,
  ) {
    const mediaUrls = files.map((f) => f.path); // URL Cloudinary
    const updateData = {
      ...body,
      media: mediaUrls,
    };
    return this.contentService.update(id, updateData);
  }

@Put('schedule/:id')
async schedule(
  @Param('id') id: string,
  @Body() dto: UpdateScheduleDto,
) {
  return this.contentService.updateSchedule(id, dto);
}
 
@Put('publish/:id')
async publishContent(@Param('id') id: string) {
  return this.contentService.publishToSocialMedia(id);
}




  
   
  


}
