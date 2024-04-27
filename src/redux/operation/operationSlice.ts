import { createSlice } from '@reduxjs/toolkit';
import { OperationState } from 'src/redux/interfaces';
import { getUserOperations } from './operationThunks';

const initialState: OperationState = {
  operations: [],
  isLoading: false,
};

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserOperations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserOperations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.operations = action.payload;
    });
    builder.addCase(getUserOperations.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage } = operationSlice.actions;
