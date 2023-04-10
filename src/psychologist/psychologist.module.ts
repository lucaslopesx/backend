import { Module } from '@nestjs/common';
import { PsychologistService } from './psychologist.service';
import { PsychologistController } from './psychologist.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [PsychologistController],
  providers: [PsychologistService, PrismaService],
})
export class PsychologistModule {}
