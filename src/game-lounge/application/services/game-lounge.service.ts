import { Injectable } from '@nestjs/common';
import { CreateGameLoungeDto } from '../../interface-adapters/dtos/create-game-lounge.dto';
import { UpdateGameLoungeDto } from '../../interface-adapters/dtos/update-game-lounge.dto';

@Injectable()
export class GameLoungeService {
  create(createGameLoungeDto: CreateGameLoungeDto) {
    return 'This action adds a new gameLounge';
  }

  findAll() {
    return `This action returns all gameLounge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameLounge`;
  }

  update(id: number, updateGameLoungeDto: UpdateGameLoungeDto) {
    return `This action updates a #${id} gameLounge`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameLounge`;
  }
}
