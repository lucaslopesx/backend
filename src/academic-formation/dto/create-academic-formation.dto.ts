import { Prisma } from '@prisma/client';

export class CreateAcademicFormationDto {
  createdAt: Date;
  updatedAt: Date;
  institution: string;
  course: string;
  description: string;
  startDate: Date;
  endDate: Date;
  psycologist: Prisma.PsychologistCreateNestedOneWithoutAcademicFormationsInput;
}
