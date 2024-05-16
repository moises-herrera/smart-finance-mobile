import { Stock } from './stock.interface';
import { Currency } from '../country';

/**
 * Represents the acquired stock information.
 */
export interface AcquiredStock {
  /** The stock. */
  stock: Stock;

  /** The user. */
  user: string;

  /** The quantity. */
  totalQuantity: number;

  /** Stock base currency. */
  currency: Currency;
}
