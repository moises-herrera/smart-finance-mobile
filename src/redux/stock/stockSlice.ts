import { createSlice } from '@reduxjs/toolkit';
import { StockState } from 'src/redux/interfaces';
import { getAvailableStocks } from './stockThunks';

const initialState: StockState = {
  stocks: [],
  areLoadingStocks: false,
  stockErrorMessage: null,
};

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.stockErrorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAvailableStocks.pending, (state) => {
      state.areLoadingStocks = true;
      state.stockErrorMessage = null;
    });
    builder.addCase(getAvailableStocks.fulfilled, (state, action) => {
      state.areLoadingStocks = false;
      state.stocks = action.payload;
    });
    builder.addCase(getAvailableStocks.rejected, (state, action) => {
      state.areLoadingStocks = false;
      state.stockErrorMessage = action.payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage } = stockSlice.actions;
