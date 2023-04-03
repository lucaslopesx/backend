import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createUserAndPsychologist(
    user: Prisma.UserCreateInput,
    psychologist: Prisma.PsychologistCreateInput,
  ) {
    return this.prisma.user.create({
      data: {
        ...user,
        psychologist: {
          create: psychologist,
        },
      },
    });
  }

  createUserAndClient(
    user: Prisma.UserCreateInput,
    client: Prisma.ClientCreateInput,
  ) {
    return this.prisma.user.create({
      data: {
        ...user,
        client: {
          create: client,
        },
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
