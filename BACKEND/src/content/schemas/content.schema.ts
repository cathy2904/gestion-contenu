import { Body } from '@nestjs/common';
import { Schema, Document } from 'mongoose';

export const ContentSchema = new Schema({
  title: String,
  body: String,
  style: String,
  length: Number,
  provider: String,
  createdAt: {    type: Date, default: Date.now,}, 
 });

 export interface Content extends Document {
  title: string;
  body: string;
  style: string;
  length: number;
  provider: string;
  createdAt: Date;
}

