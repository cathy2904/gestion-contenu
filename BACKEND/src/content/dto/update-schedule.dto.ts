// dto/update-schedule.dto.ts
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { IsISO8601 } from 'class-validator';


export class UpdateScheduleDto {
     @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
  
  @IsDateString()
   @IsISO8601({}, { message: 'schedule must be a valid ISO 8601 date string' })
  publicationDate: string;
}
