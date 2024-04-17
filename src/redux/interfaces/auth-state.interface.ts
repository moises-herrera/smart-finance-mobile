import { User } from 'src/interfaces';

/**
 * Auth state for the application.
 */
export interface AuthState {
  /** User signed in. */
  user: User | null;

  /** Status of the authentication. */
  status: 'loading' | 'authenticated' | 'not-authenticated';

  /** Error message. */
  errorMessage?: string | null;
}
