import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'src/redux/auth';
import { uiSlice } from 'src/redux/ui';
import { otpSlice } from 'src/redux/otp';
import { operationSlice } from 'src/redux/operation';
import { acquiredStockSlice } from 'src/redux/acquired-stock';

/**
 * Redux store configuration.
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    otp: otpSlice.reducer,
    operation: operationSlice.reducer,
    acquiredStock: acquiredStockSlice.reducer,
  },
});
