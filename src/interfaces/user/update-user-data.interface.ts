import { CreateUserInfo } from './create-user-info.interface';

/**
 * The data to update a user.
 */
export interface UpdateUserData {
  /** User id. */
  id: string;

  /** User data to update. */
  userData: Partial<CreateUserInfo>;
}
