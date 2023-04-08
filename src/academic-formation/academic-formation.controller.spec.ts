import { Test, TestingModule } from '@nestjs/testing';
import { AcademicFormationController } from './academic-formation.controller';
import { AcademicFormationService } from './academic-formation.service';

describe('AcademicFormationController', () => {
  let controller: AcademicFormationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicFormationController],
      providers: [AcademicFormationService],
    }).compile();

    controller = module.get<AcademicFormationController>(AcademicFormationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
