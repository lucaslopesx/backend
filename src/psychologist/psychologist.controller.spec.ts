import { Test, TestingModule } from '@nestjs/testing';
import { PsychologistController } from './psychologist.controller';
import { PsychologistService } from './psychologist.service';

describe('PsychologistController', () => {
  let controller: PsychologistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PsychologistController],
      providers: [PsychologistService],
    }).compile();

    controller = module.get<PsychologistController>(PsychologistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
