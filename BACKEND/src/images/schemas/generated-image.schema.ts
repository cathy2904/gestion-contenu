// src/modules/images/schemas/generated-image.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema()
export class GeneratedImage extends Document {
  @Prop() prompt: string;
  @Prop() fullPrompt: string;
  @Prop() provider: string;
  @Prop() url: string;
  // @Prop() userId?: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users' })
  userId?: User;
  @Prop({ default: Date.now }) createdAt: Date;
}

export const GeneratedImageSchema = SchemaFactory.createForClass(GeneratedImage);
