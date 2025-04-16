import { Module } from '@nestjs/common';
import { FilesService } from './files.service';

@Module({
  providers: [FilesService],
  exports: [FilesService], // Exporte le service pour l'utiliser dans d'autres modules
})
export class FilesModule {}
