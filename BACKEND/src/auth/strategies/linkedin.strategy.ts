import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-linkedin-oauth2';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LinkedinStrategy extends PassportStrategy(Strategy, 'linkedin') {
  constructor() {
    super({
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK_URL,
      scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'],
      state: true,
    });
  }

  validate(accessToken, _, profile) {
    return { provider: 'linkedin', profile, accessToken };
  }
}


// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-linkedin-oauth2';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class LinkedinStrategy extends PassportStrategy(Strategy, 'linkedin') {
//   constructor() {
//     super({
//       clientID: process.env.LINKEDIN_CLIENT_ID,
//       clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//       callbackURL: process.env.LINKEDIN_CALLBACK_URL,
//       scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'],
//     });
//   }

//   async validate(accessToken, refreshToken, profile) {
//     return { provider: 'linkedin', profile, accessToken };
//   }
// }


// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-linkedin-oauth2';
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class LinkedinStrategy extends PassportStrategy(Strategy, 'linkedin') {
//   constructor(configService: ConfigService) {
//     super({
//       clientID: configService.get('LINKEDIN_CLIENT_ID'),
//       clientSecret: configService.get('LINKEDIN_CLIENT_SECRET'),
//       callbackURL: configService.get('LINKEDIN_CALLBACK_URL'),
//       scope: ['r_emailaddress', 'r_liteprofile'],
//     });
//   }

//   async validate(accessToken, refreshToken, profile, done) {
//     done(null, { profile, accessToken });
//   }
// }