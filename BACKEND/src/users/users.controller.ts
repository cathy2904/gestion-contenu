import { Controller, Get, UseGuards, Request, Patch, Param, Body, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/Jwt.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from '../roles/roles.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
  @Get()
async findAll() {
  return this.usersService.findAll();
}


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('admin')
  findAdminsOnly() {
    return 'Contenu réservé aux admins';
  }
  @Patch(':id/role')
async updateRole(
  @Param('id') id: string,
  @Body('role') role: string,
) {
  return this.usersService.updateRole(id, role);
}


@Get('user/social-status')
@UseGuards(JwtAuthGuard)
getStatus(@Req() req) {
  const user = req.user
  return {
    facebook: !!user.socialAccounts?.facebook?.token,
    instagram: !!user.socialAccounts?.instagram?.token,
    linkedin: !!user.socialAccounts?.linkedin?.token,
  }
}
  
}