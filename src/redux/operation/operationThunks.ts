import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { smartFinanceApi } from 'src/api';
import { Operation } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';

/**
 * Get the operations made by the current user.
 */
export const getUserOperations = createAsyncThunk<
  Operation[],
  void,
  AsyncThunkConfig
>('getUserOperations', async (_, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.get<Operation[]>('/operation');

    return data;
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data.message
        : 'Ha ocurrido un error al cargar las operaciones.';

    return rejectWithValue({
      message,
    });
  }
});
