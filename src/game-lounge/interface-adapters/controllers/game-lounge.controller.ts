import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGameLoungeCommand } from '../../application/usecases/commands/create-game-lounge.command';
import { GameLoungeService } from '../../application/services/game-lounge.service';
import { CreateGameLoungeDto } from '../dtos/create-game-lounge.dto';
import { UpdateGameLoungeDto } from '../dtos/update-game-lounge.dto';

@Controller('game-lounge')
export class GameLoungeController {

  constructor(private readonly commandBus: CommandBus,
    private readonly gameLoungeService:GameLoungeService) {}

  @Post()
  async create(@Body() createGameLoungeDto: CreateGameLoungeDto) {
    let cmd:CreateGameLoungeCommand = new CreateGameLoungeCommand(createGameLoungeDto)
    return await this.commandBus.execute(cmd);
  }

  @Get()
  findAll() {
    return this.gameLoungeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameLoungeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameLoungeDto: UpdateGameLoungeDto) {
    return this.gameLoungeService.update(+id, updateGameLoungeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameLoungeService.remove(+id);
  }
}
