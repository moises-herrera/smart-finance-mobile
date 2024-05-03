import { createSlice } from '@reduxjs/toolkit';
import { CountryState } from 'src/redux/interfaces';
import { getCountries } from 'src/redux/country/countryThunks';

const initialState: CountryState = {
  countries: [],
  isLoadingCountries: false,
  countriesErrorMessage: null,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.countriesErrorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.isLoadingCountries = true;
    });
    builder.addCase(getCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.isLoadingCountries = false;
    });
    builder.addCase(getCountries.rejected, (state, { payload }) => {
      state.countriesErrorMessage = payload?.message;
      state.isLoadingCountries = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage } = countrySlice.actions;
