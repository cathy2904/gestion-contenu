import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/database/mongo.service';
import { ObjectId, Collection } from 'mongodb';

@Injectable()
export class PostService {
  constructor(private readonly mongoService: MongoService) {}

  private async getCollection(): Promise<Collection> {
    const db = this.mongoService.getDatabase();
    if (!db) throw new Error('Database connection not established');
    return db.collection('post');
  }

  async create(postDto: any) {
    const collection = await this.getCollection();
    postDto.comments = []; // Initialise une liste vide de commentaires
    const result = await collection.insertOne(postDto);
    return { _id: result.insertedId, ...postDto };
  }

  async findAll() {
    const collection = await this.getCollection();
    return collection.find().toArray();
  }

  async findOne(id: string) {
    const collection = await this.getCollection();
    return collection.findOne({ _id: new ObjectId(id) });
  }

  async update(id: string, updatePostDto: any) {
    const collection = await this.getCollection();
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatePostDto },
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    const collection = await this.getCollection();
    await collection.deleteOne({ _id: new ObjectId(id) });
    return { deleted: true };
  }

}


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