import { View, Text, ScrollView } from 'react-native';
import { FC, useEffect, useMemo, useState } from 'react';
import { globalStyles } from 'src/styles';
import {
  Button,
  Divider,
  FormControl,
  Input,
  Loading,
  Select,
} from 'src/components';
import { appTheme } from 'src/theme';
import { styles } from 'src/screens/auth/styles';
import { useAppDispatch, useAppSelector, useForm } from 'src/hooks';
import {
  AuthStackParamList,
  FormSubmitHandler,
  Country,
  SelectOption,
} from 'src/interfaces';
import { StackScreenProps } from '@react-navigation/stack';
import {
  RegisterSchema,
  RegisterSchemaType,
} from 'src/screens/auth/register/schemas';
import { clearErrorMessage, registerUser } from 'src/redux/auth';
import { smartFinanceApi } from 'src/api';
import { displayToast } from 'src/redux/ui';

interface RegisterProps
  extends StackScreenProps<AuthStackParamList, 'Register'> {}

const initialForm: RegisterSchemaType = {
  fullName: '',
  email: '',
  country: '',
  currency: '',
  balance: 0,
  password: '',
  confirmPassword: '',
};

export const Register: FC<RegisterProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(
    ({ auth: { errorMessage } }) => errorMessage
  );
  const isLoading = useAppSelector(
    ({ auth: { authStatus: status } }) => status === 'loading'
  );
  const {
    formState: {
      fullName,
      email,
      country,
      currency,
      balance,
      password,
      confirmPassword,
    },
    onInputChange,
    onBlur,
    handleSubmit,
    errors,
  } = useForm<RegisterSchemaType>(initialForm, RegisterSchema);
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
  const [currenciesOptions, setCurrenciesOptions] = useState<SelectOption[]>(
    []
  );

  const getCountries = async () => {
    setAreCountriesLoading(true);
    const { data } = await smartFinanceApi.get<Country[]>('/country');
    setCountries(data);
    setAreCountriesLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (country) {
      const currencies = countries.find(({ _id }) => _id === country);
      const options =
        currencies?.currencies.map<SelectOption>((currency) => ({
          label: currency.name,
          value: currency._id,
        })) || [];
      setCurrenciesOptions(options);
    }
  }, [country]);

  useEffect(() => {
    if (errorMessage) {
      dispatch(displayToast({ message: errorMessage, type: 'error' }));
      dispatch(clearErrorMessage());
    }
  }, [errorMessage]);

  if (areCountriesLoading) {
    return <Loading />;
  }

  const onSubmit: FormSubmitHandler<RegisterSchemaType> = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <ScrollView
      contentContainerStyle={[
        globalStyles.container,
        {
          paddingHorizontal: 35,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={globalStyles.title}>Registrarse</Text>
        <Text style={globalStyles.subTitle}>Crea tu cuenta</Text>
      </View>

      <View style={styles.form}>
        <FormControl label="Nombre" fieldError={errors?.fullName}>
          <Input
            id="fullName"
            value={fullName}
            onChange={onInputChange}
            onBlur={onBlur}
            hasError={!!errors?.fullName}
          />
        </FormControl>

        <FormControl label="Email" fieldError={errors?.email}>
          <Input
            id="email"
            type="email-address"
            value={email}
            onChange={onInputChange}
            onBlur={onBlur}
            hasError={!!errors?.email}
          />
        </FormControl>

        <FormControl label="País" fieldError={errors?.country}>
          <Select
            id="country"
            value={country}
            options={countriesOptions}
            onChange={onInputChange}
            hasError={!!errors?.country}
          />
        </FormControl>

        <FormControl label="Moneda" fieldError={errors?.currency}>
          <Select
            id="currency"
            value={currency}
            options={currenciesOptions}
            onChange={onInputChange}
            hasError={!!errors?.currency}
            disabled={!country}
          />
        </FormControl>

        <FormControl label="Saldo" fieldError={errors?.balance}>
          <Input
            id="balance"
            type="number-pad"
            value={balance.toString()}
            onChange={(id, value) => onInputChange(id, Number(value))}
            onBlur={onBlur}
            hasError={!!errors?.balance}
          />
        </FormControl>

        <FormControl label="Contraseña" fieldError={errors?.password}>
          <Input
            id="password"
            value={password}
            onChange={onInputChange}
            onBlur={onBlur}
            secureTextEntry={true}
            hasError={!!errors?.password}
          />
        </FormControl>

        <FormControl
          label="Confirmar contraseña"
          fieldError={errors?.confirmPassword}
        >
          <Input
            id="confirmPassword"
            value={confirmPassword}
            onChange={onInputChange}
            onBlur={onBlur}
            secureTextEntry={true}
            hasError={!!errors?.confirmPassword}
          />
        </FormControl>
      </View>

      <Button
        label="Registrarse"
        onPress={() => handleSubmit(onSubmit)}
        isLoading={isLoading}
      />

      <Divider />

      <Text style={[globalStyles.subTitle, { textAlign: 'center' }]}>
        ¿Ya tienes cuenta?{' '}
        <Text
          style={{ color: appTheme.colors.blue }}
          onPress={() => navigation.navigate('Login')}
        >
          Iniciar sesión
        </Text>
      </Text>
    </ScrollView>
  );
};
