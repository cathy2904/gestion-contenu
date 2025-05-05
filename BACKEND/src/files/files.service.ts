import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ensureDir, writeFile, unlink } from 'fs-extra';
import { join } from 'path';
import * as crypto from 'crypto';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);
  private readonly uploadDir = join(__dirname, '..', '..', 'uploads');

  async uploadFile(file: Express.Multer.File): Promise<string> {
    try {
      await ensureDir(this.uploadDir);
      
      // Génération d'un nom de fichier sécurisé
      const fileExt = file.originalname.split('.').pop();
      const randomName = crypto.randomBytes(16).toString('hex');
      const fileName = `${randomName}.${fileExt}`;
      const filePath = join(this.uploadDir, fileName);
      
      await writeFile(filePath, file.buffer);
      
      this.logger.log(`File uploaded: ${fileName}`);
      return `/uploads/${fileName}`;
    } catch (error) {
      this.logger.error('Error uploading file', error.stack);
      throw new InternalServerErrorException('Could not upload file');
    }
  }

  async deleteFile(filePath: string): Promise<void> {
    try {
      if (!filePath || !filePath.startsWith('/uploads/')) {
        return;
      }

      const fileName = filePath.replace('/uploads/', '');
      const fullPath = join(this.uploadDir, fileName);

      await unlink(fullPath);
      this.logger.log(`File deleted: ${fileName}`);
    } catch (error) {
      this.logger.warn(`Could not delete file: ${filePath}`, error.stack);
      // Ne pas throw pour ne pas bloquer les opérations principales
    }
  }

  async replaceFile(oldFilePath: string, newFile: Express.Multer.File): Promise<string> {
    try {
      // Supprimer l'ancien fichier
      if (oldFilePath) {
        await this.deleteFile(oldFilePath);
      }

      // Uploader le nouveau fichier
      return await this.uploadFile(newFile);
    } catch (error) {
      this.logger.error('Error replacing file', error.stack);
      throw new InternalServerErrorException('Could not replace file');
    }
  }
}