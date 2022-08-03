import { DomainPrimitive } from '../base-classes/value-object.base';
import { ArgumentInvalidException } from '../../../exceptions/argument-invalid.exception';
import { ID } from './id.value-object';

export class NumericID extends ID {
  
  public get valueNumeric(): number {
    return Number.parseInt(this.props.value);
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException(`Incorrect numeric id: ${value}`);
    }
  }
  
}
