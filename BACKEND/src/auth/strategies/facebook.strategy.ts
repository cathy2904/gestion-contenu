import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
      scope: [ 'public_profile', 'pages_manage_posts'],
      profileFields: ['id', 'displayName'],
    });
  }

  validate(accessToken, _, profile) {
     console.log('Facebook profile:', profile);
    return { provider: 'facebook', profile, accessToken };
  }
}


// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-facebook';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
//   constructor() {
//     super({
//       clientID: process.env.FB_CLIENT_ID,
//       clientSecret: process.env.FB_CLIENT_SECRET,
//       callbackURL: process.env.FB_CALLBACK_URL,
//       scope: ['email', 'public_profile', 'pages_manage_posts'],
//       profileFields: ['id', 'displayName', 'email'],
//     });
//   }

//   async validate(accessToken, refreshToken, profile) {
//     return { provider: 'facebook', profile, accessToken };
//   }
// }


// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-facebook';
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
//   constructor(configService: ConfigService) {
//     super({
//       clientID: configService.get('FB_CLIENT_ID'),
//       clientSecret: configService.get('FB_CLIENT_SECRET'),
//       callbackURL: configService.get('FB_CALLBACK_URL'),
//       profileFields: ['id', 'emails', 'name'],
//     });
//   }

//   async validate(accessToken, refreshToken, profile, done) {
//     done(null, { profile, accessToken });
//   }
// }