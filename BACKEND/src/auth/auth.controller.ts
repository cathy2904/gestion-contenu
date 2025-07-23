import { Controller, Post, Body, Res, UseGuards, Request, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { access_token, user } = await this.authService.login(req.user);

    
    res.cookie('token', access_token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
      // sameSite: 'strict',
      sameSite: 'lax',
      // domain: process.env.NODE_ENV === 'production' ? '.onrender.com' : undefined,
      domain: 'localhost',
      maxAge: 24 * 60 * 60 * 1000, // 1 jour
    });

    return { message: 'Connexion réussie', user };
  }


  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(username, email, password);
  }

   @Get('auth/facebook')
  @UseGuards(AuthGuard('facebook'))
  facebookLogin() {}

  @Get('auth/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookCallback(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { access_token, user } = await this.authService.validateOrCreateSocialUser('facebook', req.user.profile, req.user.accessToken);
    res.cookie('token', access_token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 86400000 });
    return res.redirect('/connect-social-success');
  }

  @Get('auth/instagram')
  @UseGuards(AuthGuard('instagram'))
  instagramLogin() {}

  @Get('auth/instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramCallback(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { access_token, user } = await this.authService.validateOrCreateSocialUser('instagram', req.user.profile, req.user.accessToken);
    res.cookie('token', access_token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 86400000 });
    return res.redirect('/connect-social-success');
  }

  @Get('auth/linkedin')
  @UseGuards(AuthGuard('linkedin'))
  linkedinLogin() {}

  @Get('auth/linkedin/callback')
  @UseGuards(AuthGuard('linkedin'))
  async linkedinCallback(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { access_token, user } = await this.authService.validateOrCreateSocialUser('linkedin', req.user.profile, req.user.accessToken);
    res.cookie('token', access_token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 86400000 });
    return res.redirect('/connect-social-success');
  }
}