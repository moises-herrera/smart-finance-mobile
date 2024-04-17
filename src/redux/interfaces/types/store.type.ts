import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from 'src/redux/store';

/**
 * The RootState type is used to infer the type of the state in the useSelector hook.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The AppDispatch type is used to infer the type of the dispatch function in the useDispatch hook.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * The AppThunk type is used to infer the type of the thunk action creator functions.
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
