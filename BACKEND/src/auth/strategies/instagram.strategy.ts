import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-instagram';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor() {
    super({
      clientID: process.env.IG_CLIENT_ID,
      clientSecret: process.env.IG_CLIENT_SECRET,
      callbackURL: process.env.IG_CALLBACK_URL,
    });
  }

  validate(accessToken, _, profile) {
    return { provider: 'instagram', profile, accessToken };
  }
}


// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-instagram';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
//   constructor() {
//     super({
//       clientID: process.env.IG_CLIENT_ID,
//       clientSecret: process.env.IG_CLIENT_SECRET,
//       callbackURL: process.env.IG_CALLBACK_URL,
//     });
//   }

//   async validate(accessToken, refreshToken, profile) {
//     return { provider: 'instagram', profile, accessToken };
//   }
// }


// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-instagram';
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
//   constructor(configService: ConfigService) {
//     super({
//       clientID: configService.get('IG_CLIENT_ID'),
//       clientSecret: configService.get('IG_CLIENT_SECRET'),
//       callbackURL: configService.get('IG_CALLBACK_URL'),
//     });
//   }

//   async validate(accessToken, refreshToken, profile, done) {
//     done(null, { profile, accessToken });
//   }
// }
