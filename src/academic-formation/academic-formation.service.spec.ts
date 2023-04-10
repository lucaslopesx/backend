import { Test, TestingModule } from '@nestjs/testing';
import { AcademicFormationService } from './academic-formation.service';

describe('AcademicFormationService', () => {
  let service: AcademicFormationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicFormationService],
    }).compile();

    service = module.get<AcademicFormationService>(AcademicFormationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
