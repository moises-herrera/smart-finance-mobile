import { Stock } from './stock.interface';

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
}
