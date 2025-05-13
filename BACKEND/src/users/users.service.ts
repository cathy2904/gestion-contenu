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
  
}