import { ErrorResponse } from 'src/interfaces';
import { RootState, AppDispatch } from './store.type';

/**
 * Async thunk config.
 */
export type AsyncThunkConfig = {
  /** Store state. */
  state: RootState;

  /** Dispatch function. */
  dispatch: AppDispatch;

  /** Reject value function. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rejectWithValue: any;

  /** Reject value. */
  rejectValue: ErrorResponse;
};
