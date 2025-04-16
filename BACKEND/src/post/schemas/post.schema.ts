import { Schema, Document } from 'mongoose';

export const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  imagePath: { type: String, required: false },
});

export interface Post extends Document {
  title: string;
  content: string;
  author: string;
  imagePath: string;
}