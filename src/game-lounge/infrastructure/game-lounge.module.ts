import { Module } from '@nestjs/common';
import { GameLoungeService } from '../application/services/game-lounge.service';
import { GameLoungeController } from '../interface-adapters/controllers/game-lounge.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GameLoungeOrmEntity } from './database/game-lounge.orm-entity';
import { UseCases } from '../application/usecases';
import { CqrsModule } from '@nestjs/cqrs';
import { GameLoungeCreatedEventHandler } from '../application/event-handlers/game-lounge-created-event.handler';

@Module({
  imports: [
    CqrsModule,
    SequelizeModule.forFeature([GameLoungeOrmEntity])],
  controllers: [GameLoungeController],
  providers: [
    GameLoungeCreatedEventHandler,
    GameLoungeService,
    ...UseCases
  ]
})
export class GameLoungeModule {}
