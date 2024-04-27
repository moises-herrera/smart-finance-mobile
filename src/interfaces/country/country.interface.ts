import { Currency } from './currency.interface';

/**
 * Represents the country interface.
 */
export interface Country {
  /** Country id. */
  _id: string;

  /** Country code. */
  code: string;

  /** Country name. */
  name: string;

  /** Country currencies. */
  currencies: Currency[];
}
