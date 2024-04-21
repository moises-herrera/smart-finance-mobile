import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'src/redux/auth';
import { uiSlice } from 'src/redux/ui';

/**
 * Redux store configuration.
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});
