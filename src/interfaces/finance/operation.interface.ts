import { OperationType } from 'src/interfaces/enums';
import { Stock } from './stock.interface';
import { Broker } from './broker.interface';
import { Currency } from '../country';

/**
 * Represents the information about a user's operation.
 */
export interface Operation {
  /** Operation id. */
  _id: string;

  /** Quantity of the stock acquired in the operation. */
  quantity: number;

  /** Amount of money used in the operation. */
  moneyAmount: number;

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

  /** Stock base currency. */
  currency: Currency;
}
