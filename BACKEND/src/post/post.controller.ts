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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostService } from './post.service';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { NotFoundException } from '@nestjs/common';

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
  

  @Put('replace/:id')
@UseInterceptors(FileInterceptor('file'))
async replaceFile(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
  // Vérifiez si le post existe
  const existingPost = await this.postService.findOne(id);
  if (!existingPost) {
    throw new NotFoundException('Post not found');
  }
  
  // Vérifiez si existingPost.imagePath est défini
  console.log('Existing imagePath:', (existingPost as { imagePath?: string }).imagePath);

  // Remplacez le fichier existant avec le nouveau
  const newFilePath = await this.filesService.replaceFile(existingPost.URL , file);

  // Mettez à jour le chemin du fichier dans le post
  return this.postService.update(id, { imagePath: newFilePath });
  
}

   
  @Put(':id')
@UseInterceptors(FileInterceptor('image')) // Handle file uploads
async update(
  @Param('id') id: string,
  @Body() updatePostDto: UpdatePostDto,
  @UploadedFile() file?: Express.Multer.File,
) {
  if (file) {
    // Save the new image path
    updatePostDto.imagePath = `/uploads/${file.filename}`;
  } else {
    // Retain the existing image path if no new image is uploaded
    const existingPost = await this.postService.findOne(id) as { imagePath?: string };
    if (existingPost && existingPost.imagePath) {
      updatePostDto.imagePath = existingPost.imagePath;
    } else {
      throw new NotFoundException('Post not found');
    }
  }

  console.log('Update DTO:', updatePostDto); // Debugging line
  return this.postService.update(id, updatePostDto);
}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }

  // @Get()
  // findAll(): Promise<PostModel[]> {
  //   return this.postService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.findOne(id);
  // }

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePostDto: UpdatePostDto,
  // ): Promise<PostModel> {
  //   return this.postService.update(id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.remove(id);
  // }
}







// import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { PostService } from './post.service';

// @Controller('posts')
// export class PostController {
//   constructor(private readonly postsService: PostService) {}

//   @Post()
//   create(@Body() createPostDto: any) {
//     return this.postsService.create(createPostDto);
//   }

//   @Get()
//   findAll() {
//     return this.postsService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.postsService.findOne(id);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updatePostDto: any) {
//     return this.postsService.update(id, updatePostDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.postsService.remove(id);
//   }
// }
