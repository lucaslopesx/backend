import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { MedicalRecordController } from './medical-record.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService, PrismaService],
})
export class MedicalRecordModule {}
