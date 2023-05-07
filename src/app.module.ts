import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PsychologistModule } from './psychologist/psychologist.module';
import { ClientsModule } from './clients/clients.module';
import { TargetAudiencesModule } from './target-audiences/target-audiences.module';
import { AcademicFormationModule } from './academic-formation/academic-formation.module';
import { TriageModule } from './triage/triage.module';
import { MedicalAppointmentModule } from './medical-appointment/medical-appointment.module';

@Module({
  imports: [
    UsersModule,
    PsychologistModule,
    ClientsModule,
    TargetAudiencesModule,
    AcademicFormationModule,
    TriageModule,
    MedicalAppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
