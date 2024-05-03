import { Stock } from 'src/interfaces';

/**
 * Stock state for the redux store.
 */
export interface StockState {
  /** List of stock. */
  stocks: Stock[];

  /** Indicates if the stocks are being loaded. */
  areLoadingStocks: boolean;

  /** Error message when loading the stock. */
  stockErrorMessage?: string | null;
}
