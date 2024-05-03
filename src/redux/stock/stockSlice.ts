import { createSlice } from '@reduxjs/toolkit';
import { StockState } from 'src/redux/interfaces';

const initialState: StockState = {
  stocks: [],
  areLoadingStocks: false,
  stockErrorMessage: null,
};

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = stockSlice.actions;
