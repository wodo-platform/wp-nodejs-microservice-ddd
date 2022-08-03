import { DomainEvent, DomainEventProps } from '@libs/ddd/domain/domain-events';
import { GameLounge } from '../entities/game-lounge.entity';

// DomainEvent is a plain object with properties
export class GameLoungeCreatedEvent extends DomainEvent {
  constructor(props: DomainEventProps<GameLoungeCreatedEvent>) {
    super(props);
    this.gameLounge = props.gameLounge;
  }

  readonly gameLounge: GameLounge;
}
