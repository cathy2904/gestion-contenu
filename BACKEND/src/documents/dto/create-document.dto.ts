import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  content: string;

  @IsString()
  summary: string;

  @IsString()
  analysis: string;

  @IsString()
  provider: string;


}
