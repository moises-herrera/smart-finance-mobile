import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Stock } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';
import { smartFinanceApi } from 'src/api';

/**
 * Get available stocks.
 */
export const getAvailableStocks = createAsyncThunk<
  Stock[],
  void,
  AsyncThunkConfig
>('getAvailableStocks', async (_, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.get<Stock[]>('/stock');
    return data;
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data.message
        : 'Ha ocurrido un error.';

    return rejectWithValue({
      message,
    });
  }
});
