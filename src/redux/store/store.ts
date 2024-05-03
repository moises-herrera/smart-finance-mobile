import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'src/redux/auth';
import { uiSlice } from 'src/redux/ui';
import { otpSlice } from 'src/redux/otp';
import { operationSlice } from 'src/redux/operation';
import { acquiredStockSlice } from 'src/redux/acquired-stock';
import { countrySlice } from 'src/redux/country';
import { stockSlice } from '../stock';

/**
 * Redux store configuration.
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    country: countrySlice.reducer,
    ui: uiSlice.reducer,
    otp: otpSlice.reducer,
    operation: operationSlice.reducer,
    stock: stockSlice.reducer,
    acquiredStock: acquiredStockSlice.reducer,
  },
});
