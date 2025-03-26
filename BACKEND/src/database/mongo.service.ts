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
    await this.client.connect();
    this.db = this.client.db(process.env.DATABASE_NAME);
    console.log('Connecté a MongoDB Atlas');
  }

  async onModuleDestroy() {
    await this.client.close();
    console.log(' Disconnecté de MongoDB');
  }

  getDatabase(): Db {
    return this.db;
  }
}
