import { IsString, IsOptional, IsNumber } from 'class-validator';

export class GenerateImageDto {
  @IsString()
  prompt: string;

  @IsOptional()
  @IsString()
  style?: string;

  @IsOptional()
  @IsString()
  size?: string; // e.g., "512x512"

  @IsOptional()
  @IsNumber()
  n?: number;

  @IsOptional()
  @IsString()
  provider?: 'openai' | 'deepseek';

  @IsOptional()
  @IsString()
  userId?: string;
}


// // src/modules/images/dto/generate-image.dto.ts
// export class GenerateImageDto {
//   prompt: string;
//   provider: 'openai' | 'deepseek';
//   size?: '256x256' | '512x512' | '1024x1024';
//   n?: number;
//   style?: string;
//   quality?: string;
//   userId?: string;
// }
