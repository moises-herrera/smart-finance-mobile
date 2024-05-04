/**
 * Information about an operation.
 */
export interface OperationInfo {
  /** Stock id. */
  stockId: string;

  /** Stock label. */
  label: string;

  /** Stock symbol. */
  symbol: string;

  /** Operation amount. */
  quantity: number;

  /** Whether the operation is a buy. */
  isBuy: boolean;
}
