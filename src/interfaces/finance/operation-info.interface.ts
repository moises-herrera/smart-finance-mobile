/**
 * Information about an operation.
 */
export interface OperationInfo {
  /** Stock label. */
  label: string;

  /** Stock symbol. */
  symbol: string;

  /** Operation amount. */
  amount: number;

  /** Whether the operation is a buy. */
  isBuy: boolean;
}
