import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      // User est déjà un Document mongoose avec cette approche
      const { password, ...result } = user.toObject();
      return result;
    }
    
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    };
  }

  async register(username: string, email: string, password: string) {
    const existingUser = await this.usersService.findByEmail(email);
    
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }
    
    const user = await this.usersService.create(username, email, password);
    
    return this.login({
      _id: user._id,
      email: user.email,
      username: user.username,
    });
  }
}