import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateUserData, User } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';
import { smartFinanceApi } from 'src/api';

/**
 * Update a user by id.
 */
export const updateUser = createAsyncThunk<
  User,
  UpdateUserData,
  AsyncThunkConfig
>('updateUser', async ({ id, userData }, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.put<User>(`/user/${id}`, userData);
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
