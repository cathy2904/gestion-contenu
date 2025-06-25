// import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';

// @Injectable()
// export class SocialService {
//   constructor(private usersService: UsersService) {}

//   async saveSocialToken(userData: any, provider: 'facebook' | 'instagram' | 'linkedin') {
//     return this.usersService.saveSocial(userData.id, provider, userData.accessToken);
//   }

//   async getUserSocialStatus(userId: string) {
//     const user = await this.usersService.findById(userId);
//     return {
//       facebook: !!user.social?.facebook,
//       instagram: !!user.social?.instagram,
//       linkedin: !!user.social?.linkedin,
//     };
//   }
// }


// import { Injectable } from '@nestjs/common';
// import { UsersService } from 'src/users/users.service';

// @Injectable()
// export class SocialService {
//   constructor(private users: UsersService) {}

//   async saveToken(user: any, provider: string, token: string) {
//     const userId = user.profile?.id || user.id;
//     return this.users.saveSocial(userId, provider, token);
//   }

//   async getStatus(user: any) {
//     const userId = user.profile?.id || user.id;
//     return this.users.getSocialStatus(userId);
//   }
// }


import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SocialService {
  private tokens = {
    facebook: null,
    instagram: null,
    linkedin: null,
  };

  async handleFacebookCallback(code: string) {
    const tokenRes = await axios.get(`https://graph.facebook.com/v13.0/oauth/access_token`, {
      params: {
        client_id: process.env.FB_CLIENT_ID,
        redirect_uri: process.env.FB_CALLBACK_URL,
        client_secret: process.env.FB_CLIENT_SECRET,
        code,
      },
    });
    this.tokens.facebook = tokenRes.data.access_token;
  }

  async handleInstagramCallback(code: string) {
    const tokenRes = await axios.post(`https://api.instagram.com/oauth/access_token`, null, {
      params: {
        client_id: process.env.IG_CLIENT_ID,
        client_secret: process.env.IG_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.IG_REDIRECT_URI,
        code,
      },
    });
    this.tokens.instagram = tokenRes.data.access_token;
  }

  async handleLinkedinCallback(code: string) {
    const tokenRes = await axios.post(
      `https://www.linkedin.com/oauth/v2/accessToken`,
      null,
      {
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        },
      },
    );
    this.tokens.linkedin = tokenRes.data.access_token;
  }

  async getStatus() {
    return {
      facebook: !!this.tokens.facebook,
      instagram: !!this.tokens.instagram,
      linkedin: !!this.tokens.linkedin,
    };
  }
}
