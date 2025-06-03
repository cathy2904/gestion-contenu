import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MongoService } from 'src/database/mongo.service';
import { ObjectId } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { Collection } from 'mongodb';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PostService {
  postModel: any;

  constructor(private readonly mongoService: MongoService) {}

    private async getCollection(): Promise<Collection<Document>> {
      const db = this.mongoService.getDatabase();
      if (!db) throw new Error('Database connection not established');
      return db.collection('post');
    }
  
    async create(postDto: any) {
      const collection = await this.getCollection();
      // postDto.comments = []; // Initialise une liste vide de commentaires
      const result = await collection.insertOne(postDto);
      return { _id: result.insertedId, ...postDto };
    }
  
    async findAll() {
      const collection = await this.getCollection();
      return collection.find().toArray();
    }
  
    async findOne(id: string) {
      const collection = await this.getCollection();
      const post = await collection.findOne({ _id: new ObjectId(id) });
      if (!post) {
        throw new NotFoundException('Post not found');
      }
      return post;
    }
  
    async update(id: string, updatePostDto: UpdatePostDto, imageUrl?: string) {
      const updateData = {
        ...updatePostDto,
        ...(imageUrl && { imageUrl }), // ajoute imageUrl seulement si elle existe
      };
      return await this.postModel.findByIdAndUpdate(id, updateData, { new: true });
    }
    
    

   
    //   // Gestion spécifique de l'image
    //   if (updateData.imagePath !== undefined) {
    //     if (updateData.imagePath === null) {
    //       updateDoc.$unset = { imagePath: "" };
    //     } else {
    //       updateDoc.$set.imagePath = updateData.imagePath;
    //     }
    //   }
  
    //   try {
    //     const result = await collection.updateOne(
    //       { _id: objectId },
    //       updateDoc
    //     );
  
    //     if (result.modifiedCount === 0) {
    //       throw new Error('Post not found or no changes made');
    //     }
  
    //     return this.findOne(id);
    //   } catch (error) {
    //     throw new InternalServerErrorException('Failed to update post');
    //   }
    // }
  
    async remove(id: string) {
      const collection = await this.getCollection();
      await collection.deleteOne({ _id: new ObjectId(id) });
      return { deleted: true };
    }

  }
  

