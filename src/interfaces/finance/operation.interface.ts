import { Stock } from './stock.interface';

/**
 * Represents the information about a user's operation.
 */
export interface Operation {
  /** Operation id. */
  id: string;

  /** Operation currency. */
  currencyId: string;

  /** Operation quantity. */
  quantity: number;

  /** Operation type. */
  typeId: string;

  /** Broker id. */
  brokerId: string;

  /** Stock data. */
  stock: Stock;

  /** When the operation was made. */
  createdAt: string;
}
