import { createSlice } from '@reduxjs/toolkit';
import { AcquiredStockState } from '../interfaces';

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
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage } = acquiredStockSlice.actions;
