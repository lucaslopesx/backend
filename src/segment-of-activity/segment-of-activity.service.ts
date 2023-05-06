import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SegmentOfActivityService {
  constructor(private prisma: PrismaService) {}

  create(segmentOfActivity: Prisma.SegmentOfActivityCreateInput) {
    return this.prisma.segmentOfActivity.create({
      data: {
        ...segmentOfActivity,
      },
    });
  }

  findAll() {
    return this.prisma.segmentOfActivity.findMany();
  }

  findOne(id: number) {
    return this.prisma.segmentOfActivity.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, segmentOfActivity: Prisma.SegmentOfActivityUpdateInput) {
    return this.prisma.segmentOfActivity.update({
      data: segmentOfActivity,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.segmentOfActivity.delete({
      where: {
        id: id,
      },
    });
  }

  connectPsychologist(psychologistId: number, targetAudienceId: number) {
    return this.prisma.segmentOfActivity.update({
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
    return this.prisma.segmentOfActivity.update({
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
}
