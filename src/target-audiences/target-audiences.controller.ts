import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TargetAudiencesService } from './target-audiences.service';
import { Prisma } from '@prisma/client';

@Controller('target-audiences')
export class TargetAudiencesController {
  constructor(
    private readonly targetAudiencesService: TargetAudiencesService,
  ) {}

  @Post()
  create(
    @Body()
    data: {
      targetAudiences: Prisma.TargetAudienceCreateInput;
      psychologistId: string;
    },
  ) {
    const { targetAudiences, psychologistId } = data;
    return this.targetAudiencesService.create(
      targetAudiences,
      Number(psychologistId),
    );
  }

  @Get()
  findAll() {
    return this.targetAudiencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetAudiencesService.findOne(Number(id));
  }

  @Get('findByPsychologistId/:psychologistId')
  findByPsychologistId(@Param('psychologistId') psychologistId: string) {
    return this.targetAudiencesService.findByPsychologistId(
      Number(psychologistId),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() targetAudiences: Prisma.TargetAudienceUpdateInput,
  ) {
    return this.targetAudiencesService.update(Number(id), targetAudiences);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetAudiencesService.remove(Number(id));
  }
}
