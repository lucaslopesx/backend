import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersController } from 'src/users/users.controller';
import { AcademicFormationService } from './academic-formation.service';

@Controller('academic-formation')
export class AcademicFormationController {
  constructor(
    private readonly academicFormationService: AcademicFormationService,
    private readonly userClient: UsersController,
  ) {}

  @Post()
  async create(
    @Body() createAcademicFormationDto: Prisma.AcademicFormationCreateInput,
  ) {
    //TODO - Create the function to get the ID of the user doing the record/update action.
    const connectedPsychologistId = '1';
    const connectedPsychologistIdNumber = 1;
    const userConnected = await this.userClient.findOne(
      connectedPsychologistId,
    );
    if (!userConnected) {
      return 'O usuario não foi encontrado!';
    }

    return this.academicFormationService.create(
      createAcademicFormationDto,
      connectedPsychologistIdNumber,
    );
  }

  @Get()
  findAll() {
    return this.academicFormationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const academicFormation = this.academicFormationService.findOne(
      Number.parseInt(id),
    );

    if (!academicFormation) {
      return 'Não foi encontrado formação acadêmica com o id informado.';
    }

    return academicFormation;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAcademicFormationDto: Prisma.AcademicFormationUpdateInput,
  ) {
    const academicFormationExits = await this.academicFormationService.findOne(
      Number(id),
    );

    if (!academicFormationExits) {
      return 'A formação acadêmica não foi encontrada';
    }

    //TODO - Create the function to get the ID of the user doing the record/update action.
    const connectedPsychologistId = '1';
    const userFormation = await this.userClient.findOne(
      connectedPsychologistId,
    );
    if (!userFormation) {
      return 'O usuario não foi encontrado!';
    }

    return await this.academicFormationService.update(
      Number(id),
      updateAcademicFormationDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const academicFormation = await this.academicFormationService.findOne(
      Number(id),
    );
    if (!academicFormation) {
      return 'A formação acadêmica não existe';
    }

    return this.academicFormationService.remove(Number(id));
  }
}
