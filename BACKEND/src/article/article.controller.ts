import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
  import { ArticleService } from './article.service';
  import { CreateArticleDto } from './dto/create-article.dto';
  import { UpdateArticleDto } from './dto/update-article.dto';
  import { Article } from './schemas/article.schema';
  import { BadRequestException } from '@nestjs/common';
 
  
  @Controller('articles')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

@Post()
async create(@Body() article: Article): Promise<Article> {
  return this.articlesService.create(article);
}

  
@Get()
async findAll() {
  const start = Date.now();
  const articles = await this.articlesService.findAll();
  const end = Date.now();
  console.log(`GET /api/articles took ${end - start}ms`);
  return articles;
}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  @Put(':id')
async update(
  @Param('id') id: string,
  @Body() article: Article,
): Promise<Article> {
  if (!article.title || !article.content) {
    throw new BadRequestException('Les champs "title" et "content" sont requis.');
  }
  return this.articlesService.update(id, article);
}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Article> {
    return this.articlesService.delete(id);
  }
}