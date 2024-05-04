import { useEffect, useMemo, useState } from 'react';
import { SelectOption } from 'src/interfaces';
import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import { clearErrorMessage, getCountries } from 'src/redux/country';
import { displayToast } from 'src/redux/ui';

export const useGetCountries = (initialCountryIdSelected?: string) => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(({ country: { countries } }) => countries);
  const areLoadingCountries = useAppSelector(
    ({ country: { areLoadingCountries } }) => areLoadingCountries
  );
  const countriesErrorMessage = useAppSelector(
    ({ country: { countriesErrorMessage } }) => countriesErrorMessage
  );
  const [countryIdSelected, setCountryIdSelected] = useState<string>(
    initialCountryIdSelected ?? ''
  );

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountries());
    }
  }, [countries, dispatch]);

  useEffect(() => {
    if (countriesErrorMessage) {
      dispatch(displayToast({ message: countriesErrorMessage, type: 'error' }));
      dispatch(clearErrorMessage());
    }
  }, [countriesErrorMessage]);

  const countriesOptions = useMemo<SelectOption[]>(
    () =>
      countries.map<SelectOption>((country) => ({
        label: country.name,
        value: country._id,
      })),
    [countries]
  );
  const currenciesOptions = useMemo<SelectOption[]>(() => {
    if (!countryIdSelected) return [];

    const currencies = countries.find(({ _id }) => _id === countryIdSelected);
    const options =
      currencies?.currencies.map<SelectOption>((currency) => ({
        label: currency.name,
        value: currency._id,
      })) || [];
    return options;
  }, [countryIdSelected, countries]);

  return {
    countries,
    areLoadingCountries,
    countriesOptions,
    currenciesOptions,
    setCountryIdSelected,
  };
};
