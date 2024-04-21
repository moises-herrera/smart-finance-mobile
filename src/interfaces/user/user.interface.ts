/**
 * Represents a user.
 */
export interface User {
  /** User id. */
  _id: string;

  /** User full name. */
  fullName: string;

  /** User email. */
  email: string;

  /** User country. */
  country: string;

  /** User currency. */
  currency: string;

  /** User balance. */
  balance: number;

  /** User currency. */
  password: string;
}
