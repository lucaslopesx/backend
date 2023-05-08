import { PartialType } from '@nestjs/swagger';
import { CreateSegmentOfActivityDto } from './create-segment-of-activity.dto';

export class UpdateSegmentOfActivityDto extends PartialType(CreateSegmentOfActivityDto) {}
