// dto/update-schedule.dto.ts
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { IsISO8601 } from 'class-validator';


export class UpdateContentDto {
     @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

   @IsOptional()
  @IsString()
  media?: string[];
  
  
  
}
