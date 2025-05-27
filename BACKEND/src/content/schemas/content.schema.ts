import { Body } from '@nestjs/common';
import { Schema, Document, Types } from 'mongoose';

export const ContentSchema = new Schema({
  title: String,
  content: String,
  style: String,
  length: String,
  provider: String,
  schedule: Date,
   statut: { type: String, enum: ['brouillon', 'programmé', 'publié'], default: 'brouillon' },
    channel: { type: String, enum: ['linkedin', 'email', 'blog'] },
  user: { type: Types.ObjectId, ref: 'Users' },
  createdAt: {    type: Date, default: Date.now,}, 
},  { collection: 'contents' 
 });

 
 export interface Content extends Document {
  title: string;
  content: string;
  style: string;
  length: string;
  provider: string;
  schedule: Date,
   statut: 'brouillon' | 'programmé' | 'publié';
  channel: 'linkedin' | 'email' | 'blog';
  user: String;
  createdAt: Date;
}

