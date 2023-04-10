import { PartialType } from '@nestjs/swagger';
import { CreateTargetAudienceDto } from './create-target-audience.dto';

export class UpdateTargetAudienceDto extends PartialType(CreateTargetAudienceDto) {}
