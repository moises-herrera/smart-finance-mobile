import { OperationType } from 'src/interfaces/enums';
import { Stock } from './stock.interface';
import { Broker } from './broker.interface';

/**
 * Represents the information about a user's operation.
 */
export interface Operation {
  /** Operation id. */
  _id: string;

  /** Operation quantity. */
  quantity: number;

  /** Operation type. */
  type: OperationType;

  /** Broker. */
  broker: Broker;

  /** Stock data. */
  stock: Stock;

  /** Id of the user who made the operation. */
  user: string;

  /** When the operation was made. */
  createdAt: string;
}
