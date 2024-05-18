import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { smartFinanceApi } from 'src/api';
import { Operation, CreateOperation, StandardResponse } from 'src/interfaces';
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

/**
 * Create a new operation.
 */
export const createOperation = createAsyncThunk<
  Operation,
  CreateOperation,
  AsyncThunkConfig
>('createOperation', async (operation, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.post<StandardResponse<Operation>>(
      '/operation',
      operation
    );

    return data.data as Operation;
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
