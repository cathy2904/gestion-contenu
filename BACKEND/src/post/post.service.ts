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
    
    // async update(id: string, updatePostDto: any, imageUrl: string | undefined) {
    //   const collection = await this.getCollection();
    //   await collection.updateOne(
    //     { _id: new ObjectId(id) },
    //     { $set: updatePostDto },
    //   );
      
    //   return this.findOne(id);
    // }

    // async update(id: string, updateData: any) {
    //   const collection = await this.getCollection();
    //   const objectId = new ObjectId(id);
  
    //   // Préparer les données de mise à jour
    //   const updateDoc: any = {
    //     $set: {
    //       title: updateData.title,
    //       content: updateData.content,
    //       author: updateData.author,
    //       updatedAt: new Date(),
    //     }
    //   };
  
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
  




// import { Injectable } from '@nestjs/common';
// import { MongoService } from 'src/database/mongo.service';
// import { ObjectId, Collection } from 'mongodb';

// @Injectable()
// export class PostService {
//   constructor(private readonly mongoService: MongoService) {}

//   private async getCollection(): Promise<Collection> {
//     const db = this.mongoService.getDatabase();
//     if (!db) throw new Error('Database connection not established');
//     return db.collection('post');
//   }

//   async create(postDto: any) {
//     const collection = await this.getCollection();
//     postDto.comments = []; // Initialise une liste vide de commentaires
//     const result = await collection.insertOne(postDto);
//     return { _id: result.insertedId, ...postDto };
//   }

//   async findAll() {
//     const collection = await this.getCollection();
//     return collection.find().toArray();
//   }

//   async findOne(id: string) {
//     const collection = await this.getCollection();
//     return collection.findOne({ _id: new ObjectId(id) });
//   }

//   async update(id: string, updatePostDto: any) {
//     const collection = await this.getCollection();
//     await collection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updatePostDto },
//     );
//     return this.findOne(id);
//   }

//   async remove(id: string) {
//     const collection = await this.getCollection();
//     await collection.deleteOne({ _id: new ObjectId(id) });
//     return { deleted: true };
//   }

// }

////////////////////////////////////////FFFFFFFFF
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { NotFoundException } from '@nestjs/common';
// import { Posts } from './schemas/post.schema';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
// import { MongoService } from 'src/database/mongo.service';

// @Injectable()


// export class PostService {
//   constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) {}

//   async create(createPostDto: CreatePostDto): Promise<Posts> {
//     const createdPost = new this.postModel(createPostDto);
//     return createdPost.save();
//   }

//   async findAll(): Promise<Posts[]> {
//     return this.postModel.find().exec();
//   }

// //   async findOne(id: string): Promise<Article> {
// //     return this.articleModel.findById(id).exec();
// //   }

// //   async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
// //     return this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();
// //   }

// //   async delete(id: string): Promise<Article> {
// //     return this.articleModel.findByIdAndDelete(id).exec();
// //   }

//   async findOne(id: string): Promise<Posts> {
//     const post = await this.postModel.findById(id).exec();
//     if (!post) {
//       throw new NotFoundException(`Article with ID ${id} not found`);
//     }
//     return post;
//   }

//   async update(id: string, post: Posts): Promise<Posts> {
//     const updatedPost = await this.postModel
//       .findByIdAndUpdate(id, post, { new: true })
//       .exec();
  
//     if (!updatedPost) {
//       throw new NotFoundException(`Article with ID ${id} not found`);
//     }
//     return updatedPost;
//   }

//   async delete(id: string): Promise<Posts> {
//     const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
//     if (!deletedPost) {
//       throw new NotFoundException(`Article with ID ${id} not found`);
//     }
//     return deletedPost;
//   }

// }