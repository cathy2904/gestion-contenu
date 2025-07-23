import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Supprime les propriétés non définies dans les DTOs
    forbidNonWhitelisted: true // Rejette les requêtes avec des propriétés non autorisées
  }));

  
  
  app.enableCors({
     origin: (origin, callback) => {
    const allowedOrigins = [
      'https://gestion-contenu-y6kt.onrender.com',
      'http://localhost:3001'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
    
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,METHODS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
  });
  // app.use(cookieParser());
  // app.useGlobalPipes(new ValidationPipe());
  // Serve static files from the uploads directory
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  
   app.setGlobalPrefix('api');
  const PORT = process.env.PORT || 3000; 
  await app.listen(PORT);
  // await app.listen(process.env.PORT || 3000);
 
  // await app.listen(PORT, '0.0.0.0'); // Écoute sur toutes les interfaces
  console.log(`Server running on http://localhost:${PORT}`);

  
}
bootstrap();
