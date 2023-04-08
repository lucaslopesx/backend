import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AcademicFormationModule } from './academic-formation/academic-formation.module';

@Module({
  imports: [UsersModule, AcademicFormationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
