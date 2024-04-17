import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'src/interfaces';
import { AuthState } from 'src/redux/interfaces';

const initialState: AuthState = {
  user: null,
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoading: (state) => {
      state.status = 'loading';
      state.user = null;
      state.errorMessage = null;
    },
    onLogin: (state, { payload }: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    },
    onLogout: (state, { payload }: PayloadAction<string | null>) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoading, onLogin, onLogout } = authSlice.actions;
