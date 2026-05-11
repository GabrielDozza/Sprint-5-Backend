import { Injectable } from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { UserMapper } from './mappers/user.mapper';
import { UserRepository } from './persistence/user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async create(dto: UserDTO) {
    const user = UserMapper.toEntity(dto);

    return this.repository.create(user);
  }

  async findAll() {
    return this.repository.findAll();
  }
}