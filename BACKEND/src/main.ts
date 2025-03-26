import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  //app.enableCors({ origin: "http://localhost:3000" });

  app.useGlobalPipes(new ValidationPipe());
  
  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });
  const PORT = process.env.PORT || 3003; 
  await app.listen(PORT);
  console.log(`Server running on http://localhost:${PORT}`);


}
bootstrap();
