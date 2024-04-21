import { ICurrency } from './currency.interface';

/**
 * Represents the country interface.
 */
export interface ICountry {
  /** Country id. */
  _id: string;

  /** Country code. */
  code: string;

  /** Country name. */
  name: string;

  /** Country currencies. */
  currencies: ICurrency[];
}
