import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongoService } from 'src/database/mongo.service';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [FilesModule],
  providers: [PostService, MongoService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
