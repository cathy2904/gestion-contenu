import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongoose from 'mongoose';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { AnalyzeService } from './analyze/analyze.service';
import { AnalyzeController } from './analyze/analyze.controller';
import { AnalyzeModule } from './analyze/analyze.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';



@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Path to the uploads directory
      serveRoot: '/uploads', // Serve files under the /uploads route
    }),
    MulterModule.register({
      dest: './uploads',  // Dossier de stockage temporaire
    }),
    ConfigModule.forRoot(), // Charge les variables d'environnement
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    PostModule,
    AnalyzeModule,
    
   
  ],
  providers: [AnalyzeService],
  controllers: [AnalyzeController],
})
export class AppModule {}