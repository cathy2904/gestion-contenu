import { Module } from '@nestjs/common';
import { AiServiceService } from './ai-service.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [AiServiceService],
  exports: [AiServiceService],
})
export class AiServiceModule {}
