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
  create(@Body() segmentOfActivityDto: Prisma.SegmentOfActivityCreateInput) {
    return this.segmentOfActivityService.create(segmentOfActivityDto);
  }

  @Get()
  findAll() {
    return this.segmentOfActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentOfActivityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() segmentOfActivityDto: Prisma.SegmentOfActivityUpdateInput,
  ) {
    return this.segmentOfActivityService.update(+id, segmentOfActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.segmentOfActivityService.remove(+id);
  }
}
