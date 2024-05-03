import { Country } from 'src/interfaces';

/**
 * Country state for the redux store.
 */
export interface CountryState {
  /** List of countries. */
  countries: Country[];

  /** Indicates if the countries are being loaded. */
  areLoadingCountries: boolean;

  /** Error message when loading the countries. */
  countriesErrorMessage?: string | null;
}
