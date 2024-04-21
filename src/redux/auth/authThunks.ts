import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { smartFinanceApi } from 'src/api';
import { getToken, setToken } from 'src/helpers';
import { AuthResponse, User, UserAuth } from 'src/interfaces';
import { AsyncThunkConfig } from 'src/redux/interfaces';

/**
 * Register a user.
 *
 * @param user The user to register.
 * @returns A thunk that dispatches an action.
 */
export const registerUser = createAsyncThunk<
  User,
  Partial<User>,
  AsyncThunkConfig
>('registerUser', async (user: Partial<User>, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.post<AuthResponse>(
      '/auth/register',
      user
    );

    await setToken(data.accessToken);

    return data.user;
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

/**
 * Login a user.
 *
 * @param user The user credentials to login.
 * @returns A thunk that dispatches an action.
 */
export const loginUser = createAsyncThunk<User, UserAuth, AsyncThunkConfig>(
  'loginUser',
  async (user: UserAuth, { rejectWithValue }) => {
    try {
      const { data } = await smartFinanceApi.post<AuthResponse>(
        '/auth/login',
        user
      );

      await setToken(data.accessToken);

      return data.user;
    } catch (error) {
      const message: string =
        error instanceof AxiosError
          ? error.response?.data.message
          : 'Ha ocurrido un error al iniciar sesión.';

      return rejectWithValue({
        message,
      });
    }
  }
);

/**
 * Validate the access token.
 *
 * @returns A thunk that dispatches an action.
 */
export const validateAccessToken = createAsyncThunk<
  User,
  void,
  AsyncThunkConfig
>('renewToken', async (_, { rejectWithValue }) => {
  const token = await getToken();

  if (!token) {
    return rejectWithValue({
      message: '',
    });
  }

  try {
    const { data } = await smartFinanceApi.get<AuthResponse>(
      '/auth/renew-token'
    );

    await setToken(data.accessToken);

    return data.user;
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
