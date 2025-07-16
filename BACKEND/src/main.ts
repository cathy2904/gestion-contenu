import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  app.setGlobalPrefix('api');
  //app.enableCors({ origin: "http://localhost:3000" });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  // Serve static files from the uploads directory
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  app.enableCors({
    origin: 'http://localhost:3001', 
    
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  const PORT = process.env.PORT || 3000; 
  // await app.listen(PORT);
  console.log(`Server running on http://localhost:${PORT}`);

  
}
bootstrap();
