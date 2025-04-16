import { IsString, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  readonly imagePath?: string;
}


// export class CreatePostDto {
//     readonly title: string;
//     readonly content: string;
//     readonly author: string;
//     readonly image: string;
//   }