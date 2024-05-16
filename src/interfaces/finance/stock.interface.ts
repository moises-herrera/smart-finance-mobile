import { Currency } from '../country';

/**
 * Represents the information of a stock.
 */
export interface Stock {
  /** Stock id. */
  _id: string;

  /** Stock's label. */
  label: string;

  /** Stock's symbol. */
  symbol: string;

  /** Stock current price. */
  price: number;

  /** Stock base currency. */
  currency: Currency;

  /** Stock covenrsion currency */
  conversionCurrency: Currency | null;
}
