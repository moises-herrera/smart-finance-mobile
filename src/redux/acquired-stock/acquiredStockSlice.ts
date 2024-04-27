import { createSlice } from '@reduxjs/toolkit';
import { AcquiredStockState } from 'src/redux/interfaces';
import { getAcquiredStocks } from './acquiredStockThunks';

const initialState: AcquiredStockState = {
  acquiredStocks: [],
  isLoading: false,
};

export const acquiredStockSlice = createSlice({
  name: 'acquiredStock',
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAcquiredStocks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAcquiredStocks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.acquiredStocks = action.payload;
    });
    builder.addCase(getAcquiredStocks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage } = acquiredStockSlice.actions;
