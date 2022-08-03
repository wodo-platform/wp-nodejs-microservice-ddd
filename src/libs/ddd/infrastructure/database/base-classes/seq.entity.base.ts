import {Column, PrimaryKey, Model, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';


export interface SeqEntityBaseProps {
  id?: number,
  createdAt?: Date,
  updatedAt?: Date,
}

export abstract class SeqEntityBase extends Model {


  constructor(props?: unknown) {
    super();
    if (props) {
      Object.assign(this, props);
    }
  }

  /*@PrimaryKey
  @Column
  declare id: number;
  
 
  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt: Date;

  /*@DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;
  */
}
