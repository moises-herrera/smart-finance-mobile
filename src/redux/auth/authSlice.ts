import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/redux/interfaces';
import {
  loginUser,
  registerUser,
  validateAccessToken,
} from 'src/redux/auth/authThunks';

const initialState: AuthState = {
  user: null,
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogout: (state, { payload }: PayloadAction<string | null>) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading';
      state.user = null;
      state.errorMessage = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload?.message;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.status = 'loading';
      state.user = null;
      state.errorMessage = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload?.message;
    });

    builder.addCase(validateAccessToken.pending, (state) => {
      state.status = 'loading';
      state.user = null;
      state.errorMessage = null;
    });
    builder.addCase(validateAccessToken.fulfilled, (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    });
    builder.addCase(validateAccessToken.rejected, (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { onLogout } = authSlice.actions;
