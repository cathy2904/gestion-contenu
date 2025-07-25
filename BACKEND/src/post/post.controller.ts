import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Patch,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostService } from './post.service';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { NotFoundException } from '@nestjs/common';
import { diskStorage } from 'multer';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly filesService: FilesService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.filesService.uploadFile(file);
  }

  @Post()
@UseInterceptors(FileInterceptor('image'))
async create(
  @Body() createPostDto: CreatePostDto,
  @UploadedFile(
    new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
        new FileTypeValidator({ fileType: 'image/*' }),
      ],
    }),
  )
  image?: Express.Multer.File,
) {
  let imagePath: string | undefined;
  if (image) {
    imagePath = await this.filesService.uploadFile(image);
  }
  return this.postService.create({ ...createPostDto, imagePath });
}


  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: any) {
  //   return this.postService.update(id, updatePostDto);
  // }
  // @Put(':id')
  // @UseInterceptors(FileInterceptor('image'))
  // async update(
  //   @Param('id') id: string,
  //   @Body() updatePostDto: UpdatePostDto,
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       fileIsRequired: false,
  //       validators: [
  //         new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
  //         new FileTypeValidator({ fileType: 'image/*' }),
  //       ],
  //     }),
  //   )
  //   image?: Express.Multer.File,
  // ) {
  //   let imagePath: string | undefined;
  //   if (image) {
  //     imagePath = await this.filesService.uploadFile(image);
  //   }
  //   console.log('Update DTO:', updatePostDto); 
  //   return this.postService.update({ id,updatePostDto, imagePath });
  // }
  
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      updatePostDto.imagePath = file.path;
    }
    return this.postService.update(id, updatePostDto);
  }


  


  // @Patch(':id')
  // @UseInterceptors(FileInterceptor('image', {
  //   storage: diskStorage({
  //     destination: './uploads',
  //     filename: (req, file, callback) => {
  //       const uniqueSuffix = Date.now() + '-' + file.originalname;
  //       callback(null, uniqueSuffix);
  //     },
  //   }),
  // }))
  // async updatePost(
  //   @Param('id') id: string,
  //   @Body() updatePostDto: UpdatePostDto,
  //   @UploadedFile() file?: Express.Multer.File,
  // ) {
  //   const imageUrl = file ? `uploads/${file.filename}` : undefined;
  //   return this.postService.update(id, updatePostDto, imageUrl);
  // }
  
//   @Patch('replace/:id')
// @UseInterceptors(FileInterceptor('file'))
// async replaceFile(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
//   // Vérifiez si le post existe
//   const existingPost = await this.postService.findOne(id);
//   if (!existingPost) {
//     throw new NotFoundException('Post not found');
//   }
  
//   // Vérifiez si existingPost.imagePath est défini
//   console.log('Existing imagePath:', (existingPost as { imagePath?: string }).imagePath);

//   // Remplacez le fichier existant avec le nouveau
//   const newFilePath = await this.filesService.replaceFile(existingPost.URL , file);

//   // Mettez à jour le chemin du fichier dans le post
//   return this.postService.update(id, { imagePath: newFilePath });
  
// }




   
//   @Put(':id')
// @UseInterceptors(FileInterceptor('image')) // Handle file uploads
// async update(
//   @Param('id') id: string,
//   @Body() updatePostDto: UpdatePostDto,
//   @UploadedFile() file?: Express.Multer.File,
// ) {
//   if (file) {
//     // Save the new image path
//     updatePostDto.imagePath = `/uploads/${file.filename}`;
//   } else {
//     // Retain the existing image path if no new image is uploaded
//     const existingPost = await this.postService.findOne(id) as { imagePath?: string };
//     if (existingPost && existingPost.imagePath) {
//       updatePostDto.imagePath = existingPost.imagePath;
//     } else {
//       throw new NotFoundException('Post not found');
//     }
//   }

//   console.log('Update DTO:', updatePostDto); // Debugging line
//   return this.postService.update(id, updatePostDto);
// }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }

  

  
}





