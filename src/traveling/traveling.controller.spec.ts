import { Test, TestingModule } from '@nestjs/testing';
import { TravelingController } from './traveling.controller';

describe('TravelingController', () => {
  let controller: TravelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelingController],
    }).compile();

    controller = module.get<TravelingController>(TravelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
