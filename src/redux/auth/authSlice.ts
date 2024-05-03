import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/redux/interfaces';
import {
  loginUser,
  registerUser,
  validateAccessToken,
} from 'src/redux/auth/authThunks';
import { updateUser } from 'src/redux/auth/userThunks';

const initialState: AuthState = {
  user: null,
  authStatus: 'loading',
  isLoadingUserInfo: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogout: (state, { payload }: PayloadAction<string | null>) => {
      state.authStatus = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
    clearUserInfoErrorMessage: (state) => {
      state.userInfoErrorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.authStatus = 'loading';
      state.user = null;
      state.errorMessage = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.authStatus = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.authStatus = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload?.message;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.authStatus = 'loading';
      state.user = null;
      state.errorMessage = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.authStatus = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.authStatus = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload?.message;
    });

    builder.addCase(validateAccessToken.pending, (state) => {
      state.authStatus = 'loading';
      state.user = null;
      state.errorMessage = null;
    });
    builder.addCase(validateAccessToken.fulfilled, (state, { payload }) => {
      state.authStatus = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    });
    builder.addCase(validateAccessToken.rejected, (state, { payload }) => {
      state.authStatus = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload?.message;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.isLoadingUserInfo = true;
      state.userInfoErrorMessage = null;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.isLoadingUserInfo = false;
      state.user = payload;
      state.userInfoErrorMessage = null;
    });
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.isLoadingUserInfo = false;
      state.errorMessage = payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { onLogout, clearErrorMessage, clearUserInfoErrorMessage } =
  authSlice.actions;
