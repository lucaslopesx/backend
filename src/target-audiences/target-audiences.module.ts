import { Module } from '@nestjs/common';
import { TargetAudiencesService } from './target-audiences.service';
import { TargetAudiencesController } from './target-audiences.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TargetAudiencesController],
  providers: [TargetAudiencesService, PrismaService],
})
export class TargetAudiencesModule {}
