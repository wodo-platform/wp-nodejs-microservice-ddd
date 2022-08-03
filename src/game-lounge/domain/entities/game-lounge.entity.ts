import { UUID } from "@libs//ddd/domain/value-objects/uuid.value-object";
import { NumericID } from "@libs/ddd/domain/value-objects/numeric.id.value-objects";
import { AggregateRoot } from "@libs/ddd/domain/base-classes/aggregate-root.base";
import { GameLoungeCreatedEvent } from "../events/game-lounge-created.event";
import { ID } from "@libs/ddd/domain/value-objects/id.value-object";


export interface CreateGameLoungeProps {
    type: number,
    state: number,
    gameTypeId: number,
    assetId: number,
    enterenceFee: number,
    prize: number,
    duration: number,
}

// All properties that a game loung has
export interface GameLoungeProps extends CreateGameLoungeProps {
    deleted: boolean,
}

export class GameLounge extends AggregateRoot<GameLoungeProps> {

    protected readonly _id: ID;

    static create(create: CreateGameLoungeProps): GameLounge {
        let id:NumericID = new NumericID("0");
        
        const props: GameLoungeProps = { ...create, deleted: false};
        const gl = new GameLounge({ id, props });
        return gl;
    }

    addGameLoungeCreatedEvent() {
        this.addEvent(
            new GameLoungeCreatedEvent({
                aggregateId: this.id.value,
                correlationId :this.id.value,
                gameLounge : this,
            }),
        );
    }

    validate(): void {
        // TODO: example
        // entity business rules validation to protect it's invariant
    }

}
