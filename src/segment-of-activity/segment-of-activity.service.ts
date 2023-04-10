import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SegmentOfActivityService {
  constructor(private prisma: PrismaService) {}

  create(segmentOfActivityDto: Prisma.SegmentOfActivityCreateInput) {
    return this.prisma.segmentOfActivity.create({
      data: {
        ...segmentOfActivityDto,
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

  update(
    id: number,
    segmentOfActivityDto: Prisma.SegmentOfActivityUpdateInput,
  ) {
    return this.prisma.segmentOfActivity.update({
      data: segmentOfActivityDto,
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
}
