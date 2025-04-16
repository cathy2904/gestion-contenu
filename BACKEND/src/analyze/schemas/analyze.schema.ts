import { Schema } from 'mongoose';

export const AnalyzeSchema = new Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  summary: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});
