import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '../interfaces';
import { smartFinanceApi } from 'src/api';
import { AxiosError } from 'axios';
import { StandardResponse } from 'src/interfaces';

/**
 * Send an OTP to the user's email.
 *
 * @param email The email to send the OTP.
 * @returns A thunk that dispatches an action.
 */
export const sendOTP = createAsyncThunk<string, string, AsyncThunkConfig>(
  'sendOTP',
  async (email: string, { rejectWithValue }) => {
    try {
      const { data } = await smartFinanceApi.post<{ details: string }>(
        '/email/forgot-password',
        {
          email,
        }
      );

      return data.details;
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

export const verifyOTP = createAsyncThunk<
  StandardResponse,
  { email: string; otp: string; verificationKey: string },
  AsyncThunkConfig
>('verifyOTP', async (body, { rejectWithValue }) => {
  try {
    const { data } = await smartFinanceApi.post<StandardResponse>(
      '/otp/verify',
      body
    );

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
