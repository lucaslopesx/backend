import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TargetAudiencesService {
  constructor(private prisma: PrismaService) {}

  create(
    targetAudience: Prisma.TargetAudienceCreateInput,
    psychologistId: number,
  ) {
    return this.prisma.targetAudience.create({
      data: {
        ...targetAudience,
        psychologist: {
          connect: {
            id: psychologistId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.targetAudience.findMany();
  }

  findOne(id: number) {
    return this.prisma.targetAudience.findUnique({
      where: {
        id: id,
      },
    });
  }

  findByPsychologistId(psychologistId: number) {
    return this.prisma.targetAudience.findFirst({
      where: {
        psychologist: {
          id: psychologistId,
        },
      },
    });
  }

  update(id: number, targetAudience: Prisma.TargetAudienceUpdateInput) {
    return this.prisma.targetAudience.update({
      data: targetAudience,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.targetAudience.delete({
      where: {
        id: id,
      },
    });
  }
}
