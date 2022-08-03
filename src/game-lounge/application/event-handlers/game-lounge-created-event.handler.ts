import { DomainEventHandler } from '@libs/ddd/domain/domain-events';
import { Inject, Injectable } from '@nestjs/common';
import { GameLoungeCreatedEvent } from '../../domain/events/game-lounge-created.event';

@Injectable()
export class GameLoungeCreatedEventHandler extends DomainEventHandler {
  constructor() {
    super(GameLoungeCreatedEvent);
    this.listen();
  }

  // Handle a Domain Event by perform changes to other aggregates (inside the same Domain).
  async handle(event: GameLoungeCreatedEvent): Promise<void> {
   
   console.log(JSON.stringify(event.gameLounge.toObject()));
   // await walletRepo.save(wallet);
  }
}
