import { Test, TestingModule } from '@nestjs/testing';
import { GameLoungeController } from './game-lounge.controller';
import { GameLoungeService } from '../../../game-lounge/application/services/game-lounge.service';

describe('GameLoungeController', () => {
  let controller: GameLoungeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameLoungeController],
      providers: [GameLoungeService],
    }).compile();

    controller = module.get<GameLoungeController>(GameLoungeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
