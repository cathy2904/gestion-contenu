import { Schema, Document } from 'mongoose';

export const ArticleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

export interface Article extends Document {
  title: string;
  content: string;
  author: string;
}