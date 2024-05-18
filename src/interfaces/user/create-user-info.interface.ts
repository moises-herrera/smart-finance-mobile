import { Country, Currency } from 'src/interfaces/country';

/**
 * Represents the data needed to create a user.
 */
export interface CreateUserInfo {
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
