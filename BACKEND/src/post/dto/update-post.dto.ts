import { IsString, IsOptional,  IsUrl } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  imagePath?: string;
 

}

// import { PartialType } from '@nestjs/mapped-types';
// import { CreatePostDto } from './create-post.dto';

// export class UpdatePostDto extends PartialType(CreatePostDto) {}

// export class UpdatePostDto {
//     readonly title?: string;
//     readonly content?: string;
//     readonly author?: string;
//     readonly image?: string;
//   }