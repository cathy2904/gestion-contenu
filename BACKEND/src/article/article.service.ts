import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

//   async findOne(id: string): Promise<Article> {
//     return this.articleModel.findById(id).exec();
//   }

//   async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
//     return this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();
//   }

//   async delete(id: string): Promise<Article> {
//     return this.articleModel.findByIdAndDelete(id).exec();
//   }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async update(id: string, article: Article): Promise<Article> {
    const updatedArticle = await this.articleModel
      .findByIdAndUpdate(id, article, { new: true })
      .exec();
  
    if (!updatedArticle) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return updatedArticle;
  }

  async delete(id: string): Promise<Article> {
    const deletedArticle = await this.articleModel.findByIdAndDelete(id).exec();
    if (!deletedArticle) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return deletedArticle;
  }

}