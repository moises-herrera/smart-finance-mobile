import { Currency } from '../country';

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

  /** Stock price for the operation. */
  price: number;

  /** Whether the operation is a buy. */
  isBuy: boolean;

  /** The currency used to make the operation. */
  currency: Currency;
}
