import { Module } from '@nestjs/common';
import { SegmentOfActivityService } from './segment-of-activity.service';
import { SegmentOfActivityController } from './segment-of-activity.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SegmentOfActivityController],
  providers: [SegmentOfActivityService, PrismaService],
})
export class SegmentOfActivityModule {}
