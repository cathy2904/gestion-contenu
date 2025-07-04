import { Body } from '@nestjs/common';
import { Schema, Document, Types } from 'mongoose';

export const ContentSchema = new Schema({
  title: String,
  // content: String,
  content: {type: String, default: ''},
  style: String,
  length: String,
  provider: String,
  schedule: Date,
   statut: { type: String, enum: ['idée', 'brouillon', 'programmé', 'publié'], default: 'brouillon' },
   publicationDate: {type: Date, required: false},
    platform: { type: String, enum: ['linkedin', 'facebook', 'instagram', 'twiter'] },
  user: { type: Types.ObjectId, ref: 'Users' },
  media: [{ type: String }],
  createdAt: {    type: Date, default: Date.now,}, 
},  { collection: 'contents' 
 });

 
 export interface Content extends Document {
  title: string;
  content: string;
  style: string;
  length: string;
  provider: string;
  publicationDate: Date,
   statut: 'brouillon' | 'programmé' | 'publié';
  platform: 'linkedin' |  'facebook' |'instagram'|'twiter';
  user: String;
   media: string[]; 
  createdAt: Date;
}

