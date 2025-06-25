// export class GenerateImageDto {
//  prompt: string;
//   style: string;
//   format: 'png' | 'jpg' | 'jpeg';
//   size?: string;
//   n?: number;
//   // userId: string;
// }

// import { IsString, IsOptional, IsNumber } from 'class-validator';

// export class GenerateImageDto {
//   @IsString()
//   prompt: string;

//   @IsOptional()
//   @IsString()
//   style?: string;

//   @IsOptional()
//   @IsString()
//   size?: string; // e.g., "512x512"

//   @IsOptional()
//   @IsNumber()
//   numImages?: number;

//   @IsOptional()
//   @IsString()
//   provider?: 'openai' | 'deepseek';

//   @IsOptional()
//   @IsString()
//   userId?: string;
// }




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

