import { createAsyncThunk } from '@reduxjs/toolkit';
import { AcquiredStock } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';
import { AxiosError } from 'axios';
import { smartFinanceApi } from 'src/api';

/**
 * Get the acquired stocks of the current user.
 */
export const getAcquiredStocks = createAsyncThunk<
  AcquiredStock[],
  void,
  AsyncThunkConfig
>('getAcquiredStocks', async (_, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.get<AcquiredStock[]>(
      '/acquired-stock'
    );

    return data;
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data.message
        : 'Ha ocurrido un error al cargar las acciones.';

    return rejectWithValue({
      message,
    });
  }
});
