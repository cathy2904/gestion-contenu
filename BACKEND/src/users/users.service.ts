import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
//   userModel: Model<User>;
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async create(username: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });
    
    return newUser.save();
  }
  async findAll() {
    
    return this.userModel.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async updateRole(id: string, role: string) {
    return this.userModel.findByIdAndUpdate(
      id,
      { role },
      { new: true },
    );
  }
  
  async saveSocialToken(data: {
  provider: 'facebook' | 'instagram' | 'linkedin';
  profile: any;
  accessToken: string;
}) {
  const { provider, profile, accessToken } = data;
  const email = profile.emails?.[0]?.value || `${provider}_${profile.id}@noemail.com`;
  let user = await this.userModel.findOne({ email });
  if (!user) {
    user = new this.userModel({ username: profile.displayName || provider, email, password: 'social_login', socialAccounts: { [provider]: { id: profile.id, token: accessToken, displayName: profile.displayName } } });
  } else {
    user.socialAccounts = { ...user.socialAccounts, [provider]: { id: profile.id, token: accessToken, displayName: profile.displayName } };
  }
  return user.save();
}

async removeSocialProvider(userId: string, provider: string) {
  const u = await this.userModel.findById(userId);
  if (u && u.socialAccounts) { u.socialAccounts[provider] = undefined; await u.save(); }
  return u;
}
async saveSocial(userId: string, provider: string, token: string) {
  return this.userModel.findOneAndUpdate(
    { _id: userId },
    { $set: { [`social.${provider}`]: token } },
    { new: true, upsert: true }
  );
}

async getSocialStatus(userId: string) {
  const u = await this.userModel.findById(userId);
  return {
    facebook: !!u?.socialAccounts?.facebook,
    instagram: !!u?.socialAccounts?.instagram,
    linkedin: !!u?.socialAccounts?.linkedin,
  };
}



// async findById(id: string) {
//   return this.userModel.findById(id);
// }

  // async saveSocialToken(data: {
  //   provider: 'facebook' | 'instagram' | 'linkedin';
  //   profile: {
  //     id: string;
  //     displayName: string;
  //     emails?: { value: string }[];
  //   };
  //   accessToken: string;
  // }): Promise<User> {
  //   const { provider, profile, accessToken } = data;
  //   const email = profile.emails?.[0]?.value || `${provider}_${profile.id}@noemail.com`;

  //   // Cherche s’il existe déjà un utilisateur par email
  //   let user = await this.userModel.findOne({ email });

  //   if (!user) {
  //     // Crée un utilisateur s’il n'existe pas
  //     user = new this.userModel({
  //       username: profile.displayName || provider,
  //       email,
  //       password: 'social_login', // ou généré aléatoirement
  //       socialAccounts: {
  //         [provider]: {
  //           id: profile.id,
  //           token: accessToken,
  //           displayName: profile.displayName,
  //         },
  //       },
  //     });
  //   } else {
  //     // Met à jour le token de la plateforme concernée
  //     user.socialAccounts = {
  //       ...user.socialAccounts,
  //       [provider]: {
  //         id: profile.id,
  //         token: accessToken,
  //         displayName: profile.displayName,
  //       },
  //     };
  //   }

  //   return user.save();
  // }
}