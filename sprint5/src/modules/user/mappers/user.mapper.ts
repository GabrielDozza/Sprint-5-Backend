import { User } from '../domain/user.entity';
import { UserDTO } from '../DTO/user.dto';

export class UserMapper {
  static toEntity(dto: UserDTO): User {
    return new User({
      name: dto.name,
      email: dto.email,
      password: dto.password,
    });
  }

  static toDTO(user: User): UserDTO {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
}