import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongoDoc } from 'mongoose';

@Schema({ timestamps: true })
export class Document extends MongoDoc {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;

  @Prop()
  summary: string;

  @Prop()
  analysis: string;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);
