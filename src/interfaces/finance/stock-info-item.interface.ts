import { Currency } from '..';

/**
 * Represents the information of a stock item displayed in the list.
 */
export interface StockInfoItem {
  /** Stock's label. */
  label: string;

  /** Stock's symbol. */
  symbol: string;

  /** The quantity acquired of the stock. */
  quantity?: number;

  /** The amount of the item, it can be the price or the amount of an operation. */
  amount: number;

  /** Stock base currency. */
  currency: Currency;

  /** Stock conversion currency */
  conversionCurrency: Currency | null;
}
