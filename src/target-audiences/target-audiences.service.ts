import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TargetAudiencesService {
  constructor(private prisma: PrismaService) {}

  create(targetAudience: Prisma.TargetAudienceCreateInput) {
    return this.prisma.targetAudience.create({
      data: {
        ...targetAudience,
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

  update(id: number, targetAudience: Prisma.TargetAudienceUpdateInput) {
    return this.prisma.targetAudience.update({
      data: targetAudience,
      where: {
        id: id,
      },
    });
  }

  connectPsychologist(psychologistId: number, targetAudienceId: number) {
    return this.prisma.targetAudience.update({
      data: {
        psychologist: {
          connect: {
            id: psychologistId,
          },
        },
      },
      where: {
        id: targetAudienceId,
      },
    });
  }

  disconnectPsychologist(psychologistId: number, targetAudienceId: number) {
    return this.prisma.targetAudience.update({
      data: {
        psychologist: {
          disconnect: {
            id: psychologistId,
          },
        },
      },
      where: {
        id: targetAudienceId,
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
