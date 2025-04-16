import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile, unlink } from 'fs-extra';
import { join } from 'path';

@Injectable()
export class FilesService {
  constructor() {}

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const uploadDir = join(__dirname, '..', '..', 'uploads');
    await ensureDir(uploadDir);
    
    const fileName = `${Date.now()}-${file.originalname}`;
    const filePath = join(uploadDir, fileName);
    
    await writeFile(filePath, file.buffer);
    
    return `/uploads/${fileName}`;
  }

  async replaceFile(existingFilePath: string, newFile: Express.Multer.File): Promise<string> {
    const uploadDir = join(__dirname, '..', '..', 'uploads');
    await ensureDir(uploadDir);

    // Delete the existing file if it exists
    if (existingFilePath) {
      const existingFileFullPath = join(uploadDir, existingFilePath.replace('/uploads/', ''));
      try {
        await unlink(existingFileFullPath);
      } catch (error) {
        console.warn(`Failed to delete existing file: ${existingFileFullPath}`);
      }
    }

    // Save the new file
    const newFileName = `${Date.now()}-${newFile.originalname}`;
    const newFilePath = join(uploadDir, newFileName);

    await writeFile(newFilePath, newFile.buffer);

    return `/uploads/${newFileName}`;
  }
}
