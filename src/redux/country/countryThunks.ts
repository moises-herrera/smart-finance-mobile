import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { smartFinanceApi } from 'src/api';
import { Country } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';

/**
 * Get the list of countries.
 */
export const getCountries = createAsyncThunk<Country[], void, AsyncThunkConfig>(
  'getCountries',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await smartFinanceApi.get<Country[]>('/country');

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
  }
);
