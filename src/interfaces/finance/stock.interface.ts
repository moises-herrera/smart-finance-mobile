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

  /** Stock current price in USD. */
  price: number;
}
