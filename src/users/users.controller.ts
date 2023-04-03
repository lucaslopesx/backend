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
import { NotFoundException } from '@nestjs/common/exceptions';
import { UseFilters } from '@nestjs/common/decorators/core/exception-filters.decorator';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('users')
@UseFilters(PrismaClientExceptionFilter)
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

  @Get('getUserByClientId/:clientId')
  getUserByClientId(@Param('clientId') clientId: string) {
    return this.usersService.getUserByClientId(+clientId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: Prisma.UserUpdateInput) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const user = this.usersService.remove(+id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
