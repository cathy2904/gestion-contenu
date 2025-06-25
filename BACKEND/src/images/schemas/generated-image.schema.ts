// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema({ timestamps: true })
// export class Image extends Document {
//   @Prop({ required: true })
//   title: string;

//   @Prop()
//   style: string;

//   @Prop()
//   width: number;

//   @Prop()
//   height: number;

//   @Prop({ type: [String] })
//   urls: string[];
// }

// export const ImageSchema = SchemaFactory.createForClass(Image);




import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema()
export class GeneratedImage extends Document {
  @Prop() prompt: string;
  @Prop() fullPrompt: string;
  @Prop() style: string;
  @Prop() provider: string;
  @Prop() url: string[];
  // @Prop() userId?: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users' })
  userId?: User;
  @Prop({ default: Date.now }) createdAt: Date;
}

export const GeneratedImageSchema = SchemaFactory.createForClass(GeneratedImage);
