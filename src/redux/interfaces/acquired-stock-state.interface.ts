import { AcquiredStock } from 'src/interfaces';

/**
 * Represents the state of the stocks acquired by the user.
 */
export interface AcquiredStockState {
  /** List of the stocks acquired by the current user. */
  acquiredStocks: AcquiredStock[];

  /** Indicates if the stocks are being loaded. */
  isLoading: boolean;

  /** Error message when loading the stocks. */
  errorMessage?: string | null;
}
