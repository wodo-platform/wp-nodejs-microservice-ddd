import { SeqEntityBase, SeqEntityBaseProps } from '../../../libs/ddd/infrastructure/database/base-classes/seq.entity.base';
import { Column, Model, Table } from 'sequelize-typescript';


export interface GameLoungeOrmProps extends SeqEntityBaseProps {
  type: number,
  state: number,
  gameTypeId: number,
  assetId: number,
  enterenceFee: number,
  prize: number,
  duration: number,
  deleted: boolean,
}

export interface GameLoungeOrmCreateProps {
  type: number,
  state: number,
  gameTypeId: number,
  assetId: number,
  enterenceFee: number,
  prize: number,
  duration: number,
  deleted: boolean,
}

@Table({tableName:"GAME_LOUNGE", version:true,omitNull:true})
export class GameLoungeOrmEntity extends SeqEntityBase implements GameLoungeOrmProps{
  
  constructor(props?: GameLoungeOrmProps) {
    super(props);
  }

  @Column 
  type: number;

  @Column 
  state: number;

  @Column
  gameTypeId: number;

  @Column
  assetId: number;

  @Column
  enterenceFee: number;

  @Column
  prize: number;

  @Column
  duration: number;

  @Column
  deleted: boolean;

}
