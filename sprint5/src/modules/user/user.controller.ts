import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  async create(@Body() dto: UserDTO) {
    return this.service.create(dto);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }
}