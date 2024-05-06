import { OperationType } from 'src/interfaces/enums';

/**
 * Represents the information to create an operation.
 */
export interface CreateOperation {
  /** Operation quantity. */
  quantity: number;

  /** Operation type. */
  type: OperationType;

  /** Broker id. */
  broker: string;

  /** Stock id. */
  stock: string;
}
