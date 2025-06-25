import { Module } from '@nestjs/common';
import { SocialController } from './social.controller';
import { SocialService } from './social.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, 
    MongooseModule,  ],
  controllers: [SocialController],
  providers: [SocialService, UsersService],
   exports: [UsersService],
})
export class SocialModule {}
