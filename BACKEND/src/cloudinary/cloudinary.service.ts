import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<any> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      Readable.from(file.buffer).pipe(stream);
    });
  }
}




// import { Injectable, Inject } from '@nestjs/common';
// import { CLOUDINARY } from './cloudinary.provider';
// import { CloudinaryProvider } from './cloudinary.provider';
// import { UploadApiResponse, v2 } from 'cloudinary';
// import * as toStream from 'buffer-to-stream';

// @Injectable()
// export class CloudinaryService {
//   constructor(@Inject(CLOUDINARY) private cloudinary) {}

//   async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
//     return new Promise((resolve, reject) => {
//       const upload = this.cloudinary.uploader.upload_stream(
//         { folder: 'project-media', resource_type: 'auto' },
//         (error, result) => {
//           if (error) return reject(error);
//           resolve(result);
//         },
//       );
//       toStream(file.buffer).pipe(upload);
//     });
//   }
// }






// import { Injectable } from '@nestjs/common';
// import { v2 as cloudinary } from 'cloudinary';
// import * as streamifier from 'streamifier';

// @Injectable()
// export class CloudinaryService {
//   constructor() {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });
//   }

//   async uploadImageFromUrl(imageUrl: string): Promise<string> {
//     const axios = await import('axios');
//     const response = await axios.default.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data, 'binary');

//     return new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream({ folder: 'generated' }, (error, result) => {
//         if (result) {
//           resolve(result.secure_url);
//         } else {
//           reject(error);
//         }
//       });

//       streamifier.createReadStream(buffer).pipe(uploadStream);
//     });
//   }
// }
