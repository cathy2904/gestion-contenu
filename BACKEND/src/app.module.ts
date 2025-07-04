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
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { FilesController } from './files/files.controller';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import { ContentModule } from './content/content.module';
import { AiServiceModule } from './ai-service/ai-service.module';
import { MongoService } from './database/mongo.service';
import { ImagesModule } from './images/images.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsModule } from './documents/documents.module';
import { SocialModule } from './social/social.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';



@Module({
  imports: [
    SocialModule,
     ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Path to the uploads directory
      serveRoot: '/uploads', // Serve files under the /uploads route
    }),
    MulterModule.register({
      dest: './uploads',  // Dossier de stockage temporaire
    }),
    ConfigModule.forRoot(), // Charge les variables d'environnement
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    PostModule,
    FilesModule,
    AnalyzeModule,
    AuthModule,
    UsersModule,
    RolesModule,
    ContentModule,
    AiServiceModule,
    ImagesModule,
    DocumentsModule,
    SocialModule,
    CloudinaryModule,
    
   
  ],
  providers: [AnalyzeService, UsersService, ContentService, MongoService],
  controllers: [AnalyzeController, UsersController, FilesController,  RolesController, ContentController, DocumentsController],
})
export class AppModule {}