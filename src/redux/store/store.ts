import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'src/redux/auth';

/**
 * Redux store configuration.
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
