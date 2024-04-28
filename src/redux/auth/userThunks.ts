import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';
import { smartFinanceApi } from 'src/api';
import { AxiosError } from 'axios';

interface UpdateUserData {
  id: string;
  userData: Partial<User>;
}

/**
 * Update a user by id.
 */
export const updateUser = createAsyncThunk<
  User,
  UpdateUserData,
  AsyncThunkConfig
>('updateUser', async ({ id, userData }, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.put(`/user/${id}`, userData);
    return data;
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data.message
        : 'Ha ocurrido un error al intentar registrarse.';

    return rejectWithValue({
      message,
    });
  }
});
