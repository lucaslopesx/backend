import { Module } from '@nestjs/common';
import { MedicalAppointmentService } from './medical-appointment.service';
import { MedicalAppointmentController } from './medical-appointment.controller';
import { PrismaService } from 'prisma/prisma.service';
import { ClientsService } from 'src/clients/clients.service';
import { PsychologistService } from 'src/psychologist/psychologist.service';

@Module({
  controllers: [MedicalAppointmentController],
  providers: [
    MedicalAppointmentService,
    PrismaService,
    ClientsService,
    PsychologistService,
  ],
})
export class MedicalAppointmentModule {}
