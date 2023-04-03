import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

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

  async getUserByClientId(clientId: number): Promise<User | null> {
    const user = this.prisma.user.findFirst({
      where: {
        client: {
          id: clientId,
        },
      },
    });

    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, user: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      data: user,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
