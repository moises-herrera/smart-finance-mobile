import { Country } from '../country';
import { Stock } from './stock.interface';

/**
 * Broker information.
 */
export interface Broker {
  /** Broker's id. */
  _id: string;

  /** Broker's name. */
  name: string;

  /** Countries where the broker operates. */
  countries: Country[];

  /** Stocks available in the broker. */
  stocks: Stock[];
}
