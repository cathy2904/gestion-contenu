import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
// import { Role, RoleDocument } from './schemas/role.schema';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
  //   constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  // async create(name: string, permissions: string[]): Promise<Role> {
  //   return this.roleModel.create({ name, permissions });
  // }

  // async findAll(): Promise<Role[]> {
  //   return this.roleModel.find();
  // }

  // async findByName(name: string): Promise<Role | null> {
  //   return this.roleModel.findOne({ name });
  // }

  // async updatePermissions(roleId: string, permissions: string[]): Promise<Role> {
  //   return this.roleModel.findByIdAndUpdate(roleId, { permissions }, { new: true });
  // }

  // async delete(roleId: string): Promise<void> {
  //   await this.roleModel.findByIdAndDelete(roleId);
  // }
}
