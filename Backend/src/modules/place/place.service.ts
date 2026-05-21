import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.place.create({
      data: {
        description: data.description,
        acessLevel: Number(data.acessLevel),
      },
    });
  }

  findAll() {
    return this.prisma.place.findMany();
  }

  update(id: number, data: any) {
  return this.prisma.place.update({
    where: { id },
    data: {
      description: data.description,
      acessLevel: Number(data.acessLevel),
    },
  });
  }

  remove(id: number) {
    return this.prisma.place.delete({
      where: { id },
    });
  }
}