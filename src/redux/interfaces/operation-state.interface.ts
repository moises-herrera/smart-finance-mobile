import { Operation } from 'src/interfaces';

/**
 * Represents the state of the operations in the application.
 */
export interface OperationState {
  /** List of the operations made by the current user. */
  operations: Operation[];

  /** Indicates if the operations are being loaded. */
  isLoading: boolean;

  /** Error message when loading the operations. */
  errorMessage?: string | null;
}
