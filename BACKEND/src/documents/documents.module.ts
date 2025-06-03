import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentSchema } from './schemas/document.schema';
import { MongoService } from 'src/database/mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Document', schema: DocumentSchema }]),
    
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService, MongoService],
  exports: [DocumentsService, MongooseModule]
 
})
export class DocumentsModule {}
