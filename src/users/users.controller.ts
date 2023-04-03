import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUserAndPsychologist')
  createUserAndPsychologist(
    @Body()
    data: {
      user: Prisma.UserCreateInput;
      psychologist: Prisma.PsychologistCreateInput;
    },
  ) {
    const { user, psychologist } = data;
    return this.usersService.createUserAndPsychologist(user, psychologist);
  }

  @Post('createUserAndClient')
  createUserAndClient(
    @Body()
    data: {
      user: Prisma.UserCreateInput;
      client: Prisma.ClientCreateInput;
    },
  ) {
    const { user, client } = data;
    return this.usersService.createUserAndClient(user, client);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
