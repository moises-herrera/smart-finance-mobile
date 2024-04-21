import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OTPState } from 'src/redux/interfaces';
import { sendOTP, verifyOTP } from './otpThunks';

const initialState: OTPState = {
  email: '',
  otp: '',
  verificationKey: '',
  isLoading: false,
  errorMessage: '',
  token: null,
};

export const otpSlice = createSlice({
  name: 'otp',
  initialState: initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendOTP.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(sendOTP.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.verificationKey = payload;
    });
    builder.addCase(sendOTP.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload?.message;
    });

    builder.addCase(verifyOTP.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(verifyOTP.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.verificationKey = '';
      state.token = payload;
    });
    builder.addCase(verifyOTP.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.verificationKey = '';
      state.errorMessage = payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, clearToken } = otpSlice.actions;
