import { Controller, Post, Body, Get, HttpException, HttpStatus, Query, Req, Param, Patch, Put, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContentService } from './content.service';
import { GenerateContentDto } from './dto/generate-content.dto';
import { CreateContentDto } from './dto/create-content.dto';
import { title } from 'process';
import { Model } from 'mongoose';
import { Content } from './schemas/content.schema';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  //  constructor(
  //   @InjectModel('Content') private readonly contentModel: Model<Content>,
  // ) {}

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
) {
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  const filter: any = {};
  if (user) filter.user = user;
  if (style) filter.style = style;
   if (statut) filter.statut = statut;
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
  const { user, style, date } = query;
  const filter: any = {};

  if (user) filter.user = user;
  if (style) filter.style = style;
  if (date) filter.createdAt = { $gte: new Date(date) };

  return this.contentService.findAll(filter);
}

// @Post('generate-image')
// async generateImage(@Body('prompt') prompt: string) {
//   const imageUrl = await this.contentService.generateImage(prompt);
//   return { imageUrl };
// }
  
  // @Post()
  // async saveContent(@Body() createContentDto: CreateContentDto) {
  //   return this.contentService.saveContent(createContentDto);
  // }
  @Post()
async saveContent(@Body() createContentDto: CreateContentDto, @Req() req) {
  const userId = req.user?.id || '664012345abc...'; // Remplace par un vrai ObjectId pour test
  return this.contentService.saveContent({ ...createContentDto, user: userId });
}


   @Post('generate')
  async generateContent(@Body() body: any) {
    const { title, style, length, provider } = body;
    const content = await this.contentService.generateContent(title, style, length, provider);

    return { content };
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

 @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContentDto: UpdateContentDto,
  ) {
    return this.contentService.update(id, updateContentDto);
  }

  

@Put('schedule/:id')
async schedule(
  @Param('id') id: string,
  @Body() dto: UpdateScheduleDto,
) {
  return this.contentService.updateSchedule(id, dto);
}
 


  //  Dashboard stats
  @Get('stats')
  async getStats() {
    return this.contentService.getStats();
  }
}
