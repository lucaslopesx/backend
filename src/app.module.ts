import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PsychologistModule } from './psychologist/psychologist.module';

@Module({
  imports: [UsersModule, PsychologistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
