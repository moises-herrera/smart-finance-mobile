import { createSlice } from '@reduxjs/toolkit';
import { CountryState } from 'src/redux/interfaces';
import { getCountries } from 'src/redux/country/countryThunks';

const initialState: CountryState = {
  countries: [],
  areLoadingCountries: false,
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
      state.areLoadingCountries = true;
    });
    builder.addCase(getCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.areLoadingCountries = false;
    });
    builder.addCase(getCountries.rejected, (state, { payload }) => {
      state.countriesErrorMessage = payload?.message;
      state.areLoadingCountries = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrorMessage } = countrySlice.actions;
