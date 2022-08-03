import { NumericID } from '@libs/ddd/domain/value-objects/numeric.id.value-objects';
import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';
import {
  EntityProps,
  OrmEntityProps,
  OrmMapper,
} from '@libs/ddd/infrastructure/database/base-classes/orm-mapper.base';
import { GameLounge, GameLoungeProps } from 'src/game-lounge/domain/entities/game-lounge.entity';
import { GameLoungeOrmCreateProps, GameLoungeOrmEntity, GameLoungeOrmProps } from './game-lounge.orm-entity';

export class GameLoungeOrmMapper extends OrmMapper<GameLounge, GameLoungeOrmProps> {

  
  protected toOrmProps(entity: GameLounge): OrmEntityProps<GameLoungeOrmProps> {
    const props = entity.getPropsCopy();

    const ormProps: OrmEntityProps<GameLoungeOrmProps> = {
      assetId: props.assetId,
      deleted: props.deleted,
      duration: props.duration,
      enterenceFee: props.enterenceFee,
      gameTypeId: props.gameTypeId,
      prize: props.prize,
      state: props.state,
      type: props.type
    };
    return ormProps;
  }

 toOrmCreateProps(entity: GameLounge): OrmEntityProps<GameLoungeOrmCreateProps> {
    const props = entity.getPropsCopy();

    const ormProps: OrmEntityProps<GameLoungeOrmCreateProps> = {
      assetId: props.assetId,
      deleted: props.deleted,
      duration: props.duration,
      enterenceFee: props.enterenceFee,
      gameTypeId: props.gameTypeId,
      prize: props.prize,
      state: props.state,
      type: props.type
    };
    return ormProps;
  }

  protected toDomainProps(ormEntityProps: GameLoungeOrmProps): EntityProps<GameLoungeProps> {
    const id = new NumericID(String(``).toString());
    const props: GameLoungeProps = {
      assetId: ormEntityProps.assetId,
      deleted: ormEntityProps.deleted,
      duration: ormEntityProps.duration,
      enterenceFee: ormEntityProps.enterenceFee,
      gameTypeId: ormEntityProps.gameTypeId,
      prize: ormEntityProps.prize,
      state: ormEntityProps.state,
      type: ormEntityProps.type
    };
    return { id, props };
  }
}
