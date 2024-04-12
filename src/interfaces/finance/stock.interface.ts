/**
 * Represents the information of a stock.
 */
export interface Stock {
  /** Stock id. */
  id: string;

  /** Stock's label. */
  label: string;

  /** Stock's symbol. */
  symbol: string;

  /** Stock's price. */
  price: number;
}
