import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicFormationDto } from '../dto/create-academic-formation.dto';

export class UpdateAcademicFormationDto extends PartialType(
  CreateAcademicFormationDto,
) {
  id: number;
}
