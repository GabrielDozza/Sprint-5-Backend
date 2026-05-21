import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
  
    const users = await this.prisma.user.findMany();
    console.log(users);

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    return user;
  }
}