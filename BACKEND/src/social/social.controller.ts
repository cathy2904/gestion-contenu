import { Controller, Get, Req, Res, Query, Post } from '@nestjs/common';
import { SocialService } from './social.service';
import { Response, Request } from 'express';
import { Body } from '@nestjs/common';

@Controller('auth')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Get('facebook')
  async facebookLogin(@Res() res: Response) {
    const redirect = `https://www.facebook.com/v13.0/dialog/oauth?client_id=${process.env.FB_CLIENT_ID}&redirect_uri=${process.env.FB_CALLBACK_URL}&scope=email,public_profile`;
    res.redirect(redirect);
  }

  @Get('facebook/callback')
  async facebookCallback(@Query('code') code: string, @Res() res: Response) {
    await this.socialService.handleFacebookCallback(code);
    res.redirect(`${process.env.FRONTEND_URL}/connect`);
  }
//   @Get('facebook/callback')
// async facebookCallback(@Query('code') code: string, @Req() req: Request, @Res() res: Response) {
//   const user = req.user as { _id: string };
// const userId = user._id;

//   await this.socialService.handleFacebookCallback(code, userId);
//   res.redirect(`${process.env.FRONTEND_URL}/connect`);
// }

@Get('disconnect/facebook')
async disconnectFacebook(@Req() req: Request) {
 const user = req.user as { _id: string };
const userId = user._id;

  await this.socialService.disconnectFacebook(userId);
  return { message: 'Facebook account disconnected' };
}

  @Get('instagram')
  async instagramLogin(@Res() res: Response) {
    const redirect = `https://api.instagram.com/oauth/authorize?client_id=${process.env.IG_CLIENT_ID}&redirect_uri=${process.env.IG_REDIRECT_URI}&scope=user_profile&response_type=code`;
    res.redirect(redirect);
  }

  @Get('instagram/callback')
  async instagramCallback(@Query('code') code: string, @Res() res: Response) {
    await this.socialService.handleInstagramCallback(code);
    res.redirect(`${process.env.FRONTEND_URL}/connect`);
  }

  @Get('linkedin')
  async linkedinLogin(@Res() res: Response) {
    const redirect = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.LINKEDIN_REDIRECT_URI}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
    res.redirect(redirect);
  }

  @Get('linkedin/callback')
  async linkedinCallback(@Query('code') code: string, @Res() res: Response) {
    await this.socialService.handleLinkedinCallback(code);
    res.redirect(`${process.env.FRONTEND_URL}/connect`);
  }

  @Get('social-status')
  async status(@Req() req: Request) {
    return this.socialService.getStatus();
  }

  @Post('publish')
async publishToSocial(@Body() body: { platform: string, content: string }) {
  return this.socialService.publishToSocial(body.platform, body.content);
}

  
  
}


// import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
// import { Response } from 'express';
// import { AuthGuard } from '@nestjs/passport';
// import { SocialService } from './social.service';

// @Controller('auth')
// export class SocialController {
//   constructor(private svc: SocialService) {}

//   @Get('facebook') @UseGuards(AuthGuard('facebook')) facebook() {}
//   @Get('facebook/callback') @UseGuards(AuthGuard('facebook'))
//   async fbCb(@Req() req, @Res() res: Response) {
//     await this.svc.saveToken(req.user, 'facebook', req.user.accessToken);
//     return res.redirect('http://localhost:3000/connect-social');
//   }

//   // idem instagram
//   @Get('instagram') @UseGuards(AuthGuard('instagram')) instagram() {}
//   @Get('instagram/callback') @UseGuards(AuthGuard('instagram'))
//   async igCb(@Req() req, @Res() res: Response) {
//     await this.svc.saveToken(req.user, 'instagram', req.user.accessToken);
//     return res.redirect('http://localhost:3000/connect-social');
//   }

//   // idem linkedin
//   @Get('linkedin') @UseGuards(AuthGuard('linkedin')) linkedin() {}
//   @Get('linkedin/callback') @UseGuards(AuthGuard('linkedin'))
//   async liCb(@Req() req, @Res() res: Response) {
//     await this.svc.saveToken(req.user, 'linkedin', req.user.accessToken);
//     return res.redirect('http://localhost:3001/connect-social');
//   }

//   @Get('social-status') async status(@Req() req) {
//     return this.svc.getStatus(req.user);
//   }
// }



// import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
// import { Response } from 'express';
// import { SocialService } from './social.service';
// import { FacebookAuthGuard, LinkedInAuthGuard, InstagramAuthGuard } from './social.guard';

// @Controller('auth')
// export class SocialController {
//   constructor(private readonly socialService: SocialService) {}

//   @Get('facebook')
//   @UseGuards(FacebookAuthGuard)
//   async facebookLogin() {}

//   @Get('facebook/callback')
//   @UseGuards(FacebookAuthGuard)
//   async facebookCallback(@Req() req, @Res() res: Response) {
//     await this.socialService.saveSocialToken(req.user, 'facebook');
//     return res.redirect('http://localhost:3001/connect-social');
//   }

//   @Get('linkedin')
//   @UseGuards(LinkedInAuthGuard)
//   async linkedinLogin() {}

//   @Get('linkedin/callback')
//   @UseGuards(LinkedInAuthGuard)
//   async linkedinCallback(@Req() req, @Res() res: Response) {
//     await this.socialService.saveSocialToken(req.user, 'linkedin');
//     return res.redirect('http://localhost:3001/connect-social');
//   }

//   @Get('instagram')
//   @UseGuards(InstagramAuthGuard)
//   async instagramLogin() {}

//   @Get('instagram/callback')
//   @UseGuards(InstagramAuthGuard)
//   async instagramCallback(@Req() req, @Res() res: Response) {
//     await this.socialService.saveSocialToken(req.user, 'instagram');
//     return res.redirect('http://localhost:3001/connect-social');
//   }

//   @Get('social-status')
//   async socialStatus(@Req() req) {
//     return this.socialService.getUserSocialStatus(req.user.id);
//   }
// }


// import { Controller, Param, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
// import axios from 'axios';
// import { Body } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/guards/Jwt.guard';

// @Controller('social')
// export class SocialController {
//     @Post('social/publish/:platform')
// @UseGuards(JwtAuthGuard)
// async publish(@Param('platform') platform: string, @Body('message') message: string, @Req() req) {
//   const user = req.user
//   const token = user.socialAccounts?.[platform]?.token

//   if (!token) throw new UnauthorizedException(`Non connecté à ${platform}`)

//   // Publication personnalisée
//   if (platform === 'facebook') {
//     await axios.post(`https://graph.facebook.com/me/feed`, {
//       message,
//       access_token: token,
//     })
//   } else if (platform === 'linkedin') {
//     await axios.post(`https://api.linkedin.com/v2/ugcPosts`, {
//       author: `urn:li:person:${user.socialAccounts.linkedin.id}`,
//       lifecycleState: 'PUBLISHED',
//       specificContent: {
//         'com.linkedin.ugc.ShareContent': {
//           shareCommentary: { text: message },
//           shareMediaCategory: 'NONE',
//         },
//       },
//       visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
//     }, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'X-Restli-Protocol-Version': '2.0.0',
//         'Content-Type': 'application/json',
//       },
//     })
//   }
//   // Instagram requires special handling via Facebook Graph API (Business Account)

//   return { message: 'Message publié sur ' + platform }
// }

// }
