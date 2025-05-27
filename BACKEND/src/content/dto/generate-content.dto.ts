export class GenerateContentDto {
  readonly title: string;
  readonly style?: string;
  readonly length?: string;
  readonly provider: 'openai' | 'deepseek' | 'claude';
}

// import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';

// enum AIProvider {
//   OPENAI = 'openai',
//   DEEPSEEK = 'deepseek',
//   CLAUDE = 'claude',
// }

// export class GenerateContentDto {
//   @IsNotEmpty()
//   @IsString()
//   prompt: string;

//   @IsNotEmpty()
//   @IsString()
//   textStyle: string;

//   @IsNotEmpty()
//   @IsNumber()
//   textLength: number;

//   @IsNotEmpty()
//   @IsEnum(AIProvider)
//   aiProvider: string;
// }