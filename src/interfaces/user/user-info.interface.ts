import { Country, Currency } from 'src/interfaces/country';

/**
 * Represents a user.
 */
export interface UserInfo {
  /** User id. */
  _id: string;

  /** User full name. */
  fullName: string;

  /** User email. */
  email: string;

  /** User country. */
  country: Country;

  /** User currency. */
  currency: Currency;

  /** User balance. */
  balance: number;

  /** User currency. */
  password: string;
}
