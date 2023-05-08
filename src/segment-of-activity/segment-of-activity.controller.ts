import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SegmentOfActivityService } from './segment-of-activity.service';
import { Prisma } from '@prisma/client';

@Controller('segment-of-activity')
export class SegmentOfActivityController {
  constructor(
    private readonly segmentOfActivityService: SegmentOfActivityService,
  ) {}

  @Post()
  create(@Body() segmentOfActivity: Prisma.SegmentOfActivityCreateInput) {
    return this.segmentOfActivityService.create(segmentOfActivity);
  }

  @Get()
  findAll() {
    return this.segmentOfActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentOfActivityService.findOne(+id);
  }

  connectPsychologist(
    @Param('psychologistId') psychologistId: string,
    @Param('targetAudienceId') targetAudienceId: string,
  ) {
    return this.segmentOfActivityService.connectPsychologist(
      Number(psychologistId),
      Number(targetAudienceId),
    );
  }

  disconnectPsychologist(
    @Param('psychologistId') psychologistId: string,
    @Param('targetAudienceId') targetAudienceId: string,
  ) {
    return this.segmentOfActivityService.disconnectPsychologist(
      Number(psychologistId),
      Number(targetAudienceId),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() segmentOfActivity: Prisma.SegmentOfActivityUpdateInput,
  ) {
    return this.segmentOfActivityService.update(+id, segmentOfActivity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.segmentOfActivityService.remove(+id);
  }
}
