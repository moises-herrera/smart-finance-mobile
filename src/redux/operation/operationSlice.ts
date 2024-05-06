import { createSlice } from '@reduxjs/toolkit';
import { OperationState } from 'src/redux/interfaces';
import { createOperation, getUserOperations } from './operationThunks';

const initialState: OperationState = {
  operations: [],
  isLoading: false,
  isCreatingOperation: false,
};

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
    clearCreateOperationErrorMessage: (state) => {
      state.createOperationErrorMessage = null;
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

    builder.addCase(createOperation.pending, (state) => {
      state.isCreatingOperation = true;
    });
    builder.addCase(createOperation.fulfilled, (state, { payload }) => {
      state.isCreatingOperation = false;
      state.operations.push(payload);
    });
    builder.addCase(createOperation.rejected, (state, { payload }) => {
      state.isCreatingOperation = false;
      state.createOperationErrorMessage = payload?.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage, clearCreateOperationErrorMessage } =
  operationSlice.actions;
