import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PsychologistModule } from './psychologist/psychologist.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [UsersModule, PsychologistModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
