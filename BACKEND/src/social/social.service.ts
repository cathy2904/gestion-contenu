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


import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
@Injectable()
export class SocialService {
  // private tokens = {
  //   facebook: null,
  //   instagram: null,
  //   linkedin: null,
  // };
  private tokens = {
  facebook: null as string | null,
  instagram: null as string | null,
  linkedin: null as string | null,
  facebookProfile: null as { id: string; displayName: string } | null,
};


  // async handleFacebookCallback(code: string) {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  
  // async handleFacebookCallback(code: string) {
  //   const tokenRes = await axios.get(`https://graph.facebook.com/v13.0/oauth/access_token`, {
  //     params: {
  //       client_id: process.env.FB_CLIENT_ID,
  //       redirect_uri: process.env.FB_CALLBACK_URL,
  //       client_secret: process.env.FB_CLIENT_SECRET,
  //       code,
  //     },
  //   });
  //   this.tokens.facebook = tokenRes.data.access_token;
  // }
  async handleFacebookCallback(code: string) {
  const tokenRes = await axios.get('https://graph.facebook.com/v13.0/oauth/access_token', {
    params: {
      client_id: process.env.FB_CLIENT_ID,
      redirect_uri: process.env.FB_CALLBACK_URL,
      client_secret: process.env.FB_CLIENT_SECRET,
      code,
    },
  });

  const accessToken = tokenRes.data.access_token;
  this.tokens.facebook = accessToken;

  // 👉 Appel à l’API Graph pour récupérer les infos de l’utilisateur
  const profileRes = await axios.get('https://graph.facebook.com/me', {
    params: {
      access_token: accessToken,
      fields: 'id,first_name,last_name,name',
    },
  });

  const { id, first_name, name } = profileRes.data;

  // 👇 Tu peux stocker le nom complet ou juste le prénom
  this.tokens.facebookProfile = {
    id,
    displayName: first_name || name, // ou `name` complet si tu préfères
  };
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

  // async getStatus() {
  //   return {
  //     facebook: !!this.tokens.facebook,
  //     instagram: !!this.tokens.instagram,
  //     linkedin: !!this.tokens.linkedin,
  //   };
  // }

  async getStatus() {
  return {
    facebook: !!this.tokens.facebook,
    instagram: !!this.tokens.instagram,
    linkedin: !!this.tokens.linkedin,
    displayNames: {
      facebook: this.tokens.facebookProfile?.displayName || null,
      instagram: null,
      linkedin: null,
    },
  };
}


  async disconnectFacebook(userId: string) {
    await this.userModel.findByIdAndUpdate(userId, {
      $unset: {
        'socialAccounts.facebook': '',
      },
    });
  }

  async publishToSocial(platform: string, content: string) {
  switch (platform) {
    case 'facebook':
      return this.publishToFacebook(content);
    case 'instagram':
      return this.publishToInstagram(content);
    // case 'linkedin':
    //   return this.publishToLinkedIn(content);
    default:
      throw new BadRequestException('Plateforme non supportée');
  }
}

// Facebook
async publishToFacebook(content: string) {
  const token = this.tokens.facebook; // récupéré lors de la connexion
  if (!token) throw new UnauthorizedException('Facebook non connecté');

  const pageId = process.env.FB_PAGE_ID;
  const res = await axios.post(
    `https://graph.facebook.com/${pageId}/feed`,
    { message: content },
    { params: { access_token: token } },
  );
  return res.data;
}

async publishToInstagram(content: string){

}
async publishToLinkedin(content: string){
  
}


  // async getStatus(userId: string) {
  //   const user = await this.userModel.findById(userId);
  //   return {
  //     facebook: !!user?.socialAccounts?.facebook,
  //     instagram: !!user?.socialAccounts?.instagram,
  //     linkedin: !!user?.socialAccounts?.linkedin,
  //     displayNames: {
  //       facebook: user?.socialAccounts?.facebook?.displayName || null,
  //       instagram: user?.socialAccounts?.instagram?.displayName || null,
  //       linkedin: user?.socialAccounts?.linkedin?.displayName || null,
  //     },
  //   };
  // }
}
