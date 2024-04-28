import { User } from 'src/interfaces';

/**
 * Auth state for the application.
 */
export interface AuthState {
  /** User signed in. */
  user: User | null;

  /** Status of the authentication. */
  authStatus: 'loading' | 'authenticated' | 'not-authenticated';

  /** Error message. */
  errorMessage?: string | null;

  /** If the user info is loading. */
  isLoadingUserInfo: boolean;

  /** User info error message. */
  userInfoErrorMessage?: string | null;
}
