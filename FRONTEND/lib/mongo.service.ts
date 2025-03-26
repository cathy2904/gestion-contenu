
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MongoService implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient;
  private db: Db;

  constructor() {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI n est pas defini dans le fichier .env');
    }

    this.client = new MongoClient(mongoUri);
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      this.db = this.client.db(process.env.DATABASE_NAME);
      console.log('Connecté a MongoDB Atlas');
    } catch (error) {
      console.error('Erreur de connexion a MongoDB Atlas', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.client.close();
    console.log('Disconnecté de MongoDB');
  }

  getDatabase(): Db {
    if (!this.db) {
      throw new Error('Database is not connected');
    }
    return this.db;
  }
}