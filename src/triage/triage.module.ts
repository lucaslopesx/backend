import { Module } from '@nestjs/common';
import { TriageService } from './triage.service';
import { TriageController } from './triage.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TriageController],
  providers: [TriageService, PrismaService],
})
export class TriageModule {}
