import { Test, TestingModule } from '@nestjs/testing';
import { GameLoungeService } from './game-lounge.service';

describe('GameLoungeService', () => {
  let service: GameLoungeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameLoungeService],
    }).compile();

    service = module.get<GameLoungeService>(GameLoungeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
