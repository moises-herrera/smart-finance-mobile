import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from 'src/styles';
import { Button, FormControl, Input, Loading, Select } from 'src/components';
import {
  SettingsSchema,
  SettingsSchemaType,
} from 'src/screens/home/settings/schemas';
import { useAppDispatch, useAppSelector, useForm } from 'src/hooks';
import { Country, FormSubmitHandler, SelectOption } from 'src/interfaces';
import { appTheme } from 'src/theme';
import {
  clearUserInfoErrorMessage,
  onLogout,
  updateUser,
} from 'src/redux/auth';
import { removeToken } from 'src/helpers';
import { useEffect, useMemo, useState } from 'react';
import { displayToast } from 'src/redux/ui';
import { smartFinanceApi } from 'src/api';

const initialForm: SettingsSchemaType = {
  fullName: '',
  email: '',
  country: '',
  currency: '',
  balance: 0,
  password: '',
};

export const Settings = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ auth }) => auth.user);
  const isLoading = useAppSelector(
    ({ auth: { isLoadingUserInfo } }) => isLoadingUserInfo
  );
  const userInfoErrorMessage = useAppSelector(
    ({ auth: { userInfoErrorMessage } }) => userInfoErrorMessage
  );
  const {
    formState: { fullName, email, country, currency, balance, password },
    onInputChange,
    onBlur,
    handleSubmit,
    errors,
  } = useForm<SettingsSchemaType>(user ?? initialForm, SettingsSchema);

  const onSubmit: FormSubmitHandler<SettingsSchemaType> = (data) => {
    dispatch(updateUser({ id: user?._id as string, userData: data }))
      .unwrap()
      .then(() => {
        dispatch(
          displayToast({ message: 'Datos actualizados', type: 'success' })
        );
      });
  };

  useEffect(() => {
    if (userInfoErrorMessage) {
      dispatch(displayToast({ message: userInfoErrorMessage, type: 'error' }));
      dispatch(clearUserInfoErrorMessage());
    }
  }, [userInfoErrorMessage]);

  const [countries, setCountries] = useState<Country[]>([]);
  const [areCountriesLoading, setAreCountriesLoading] = useState<boolean>(true);
  const countriesOptions = useMemo<SelectOption[]>(
    () =>
      countries.map<SelectOption>((country) => ({
        label: country.name,
        value: country._id,
      })),
    [countries]
  );
  const currenciesOptions = useMemo<SelectOption[]>(() => {
    if (!country) return [];

    const currencies = countries.find(({ _id }) => _id === country);
    const options =
      currencies?.currencies.map<SelectOption>((currency) => ({
        label: currency.name,
        value: currency._id,
      })) || [];
    return options;
  }, [country, countries]);

  const getCountries = async () => {
    setAreCountriesLoading(true);
    const { data } = await smartFinanceApi.get<Country[]>('/country');
    setCountries(data);
    setAreCountriesLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const logout = async () => {
    await removeToken();
    dispatch(onLogout(null));
  };

  if (areCountriesLoading) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: '100%' }}>
        <Text
          style={[
            globalStyles.title,
            {
              fontSize: 18,
              textAlign: 'left',
            },
          ]}
        >
          Configuración
        </Text>
      </View>

      <ScrollView style={styles.form}>
        <FormControl
          label="Nombre"
          fieldError={errors?.fullName}
          style={styles.formControl}
        >
          <Input
            id="fullName"
            value={fullName}
            onChange={onInputChange}
            onBlur={onBlur}
            hasError={!!errors?.fullName}
          />
        </FormControl>

        <FormControl
          label="Email"
          fieldError={errors?.email}
          style={styles.formControl}
        >
          <Input
            id="email"
            type="email-address"
            value={email}
            onChange={onInputChange}
            onBlur={onBlur}
            hasError={!!errors?.email}
          />
        </FormControl>

        <FormControl
          label="País"
          fieldError={errors?.country}
          style={styles.formControl}
        >
          <Select
            id="country"
            value={country}
            options={countriesOptions}
            onChange={onInputChange}
            hasError={!!errors?.country}
          />
        </FormControl>

        <FormControl
          label="Moneda"
          fieldError={errors?.currency}
          style={styles.formControl}
        >
          <Select
            id="currency"
            value={currency}
            options={currenciesOptions}
            onChange={onInputChange}
            hasError={!!errors?.currency}
            disabled={!country}
          />
        </FormControl>

        <FormControl
          label="Saldo"
          fieldError={errors?.balance}
          style={styles.formControl}
        >
          <Input
            id="balance"
            type="number-pad"
            value={balance.toString()}
            onChange={(id, value) => onInputChange(id, Number(value))}
            onBlur={onBlur}
            hasError={!!errors?.balance}
          />
        </FormControl>

        <FormControl
          label="Contraseña"
          fieldError={errors?.password}
          style={styles.formControl}
        >
          <Input
            id="password"
            value={password}
            onChange={onInputChange}
            onBlur={onBlur}
            secureTextEntry={true}
            hasError={!!errors?.password}
          />
        </FormControl>

        <View
          style={{
            height: 150,
            marginTop: 24,
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <Button
            label="Guardar"
            onPress={() => handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
          <Button
            style={{
              button: {
                backgroundColor: appTheme.colors.white,
                borderWidth: 0.5,
                borderRadius: 6,
              },
              buttonText: {
                color: '#000',
              },
            }}
            label="Cerrar sesión"
            onPress={logout}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};
