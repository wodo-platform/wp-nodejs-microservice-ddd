import { CommandHandler, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { CreateGameLoungeCommand } from "./commands/create-game-lounge.command";
import { Result } from '@libs/ddd/domain/utils/result.util';
import { ID } from "@libs/ddd/domain/value-objects/id.value-object";
import { GameLoungeAlreadyExistsError } from "src/game-lounge/domain/errors/game-lounge.errors";
import { GameLoungeOrmCreateProps, GameLoungeOrmEntity, GameLoungeOrmProps } from "src/game-lounge/infrastructure/database/game-lounge.orm-entity";
import { InjectModel } from "@nestjs/sequelize";
import { GameLounge } from "../../domain/entities/game-lounge.entity";
import { GameLoungeOrmMapper } from "src/game-lounge/infrastructure/database/game-lounge.orm-mapper";
import { NumericID } from "@libs/ddd/domain/value-objects/numeric.id.value-objects";
import { DomainEvents } from "@libs/ddd/domain/domain-events";
import { Logger } from "@nestjs/common";

@CommandHandler(CreateGameLoungeCommand)
export class CreateGameLoungeUseCase implements ICommandHandler<CreateGameLoungeCommand> {

  private readonly logger = new Logger(CreateGameLoungeUseCase.name);

  constructor(@InjectModel(GameLoungeOrmEntity)
  private gameLoungeOrmEntity: typeof GameLoungeOrmEntity) {

  }

  async execute(command: CreateGameLoungeCommand): Promise<Result<GameLounge, GameLoungeAlreadyExistsError>> {

    let { type, state, gameTypeId, assetId, enterenceFee, prize, duration } = command;

    let gl: GameLounge = GameLounge.create({ type, state, gameTypeId, assetId, enterenceFee, prize, duration })

    let mapper = new GameLoungeOrmMapper(GameLounge, GameLoungeOrmEntity);
    let glpros: GameLoungeOrmCreateProps = mapper.toOrmCreateProps(gl);
    let gle: GameLoungeOrmEntity = await this.gameLoungeOrmEntity.create(
      {...glpros}
    );
    gl.setId(new NumericID(String(gle.id).toString()));
    gl.addGameLoungeCreatedEvent();
    await DomainEvents.publishEvents(
      gl.id,
      this.logger,
      gl.id.value
    );
    console.log(`game lounge: ${JSON.stringify(gle)}`);
    return Result.ok(gl);
  }
}