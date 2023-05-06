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
    targetAudiences: Prisma.TargetAudienceCreateInput,
  ) {
    return this.targetAudiencesService.create(targetAudiences);
  }

  @Get()
  findAll() {
    return this.targetAudiencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetAudiencesService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() targetAudiences: Prisma.TargetAudienceUpdateInput,
  ) {
    return this.targetAudiencesService.update(Number(id), targetAudiences);
  }

  connectPsychologist(
    @Param('psychologistId') psychologistId: string,
    @Param('targetAudienceId') targetAudienceId: string,
  ) {
    return this.targetAudiencesService.connectPsychologist(
      Number(psychologistId),
      Number(targetAudienceId),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetAudiencesService.remove(Number(id));
  }
}
