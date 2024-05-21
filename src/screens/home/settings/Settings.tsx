import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from 'src/styles';
import { Button, FormControl, Input, Loading, Select } from 'src/components';
import {
  SettingsSchema,
  SettingsSchemaType,
} from 'src/screens/home/settings/schemas';
import {
  useAppDispatch,
  useAppSelector,
  useForm,
  useGetCountries,
} from 'src/hooks';
import { FormSubmitHandler, User } from 'src/interfaces';
import { appTheme } from 'src/theme';
import {
  clearUserInfoErrorMessage,
  onLogout,
  updateUser,
} from 'src/redux/auth';
import { removeToken } from 'src/helpers';
import { useCallback } from 'react';
import { displayToast } from 'src/redux/ui';
import { useFocusEffect } from '@react-navigation/native';

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
  const isLoadingUserInfo = useAppSelector(
    ({ auth: { isLoadingUserInfo } }) => isLoadingUserInfo
  );
  const userInfoErrorMessage = useAppSelector(
    ({ auth: { userInfoErrorMessage } }) => userInfoErrorMessage
  );
  const {
    areLoadingCountries,
    countriesOptions,
    currenciesOptions,
    setCountryIdSelected,
  } = useGetCountries(user?.country as string);

  const {
    currency: { _id: currencyId },
    ...userFields
  } = user as User;
  const userFormData = {
    ...userFields,
    currency: currencyId,
  };
  const {
    formState: { fullName, email, country, currency, balance, password },
    onInputChange,
    onBlur,
    handleSubmit,
    onSetForm,
    onResetForm,
    errors,
  } = useForm<SettingsSchemaType>(userFormData ?? initialForm, SettingsSchema);

  const onSubmit: FormSubmitHandler<SettingsSchemaType> = (data) => {
    dispatch(updateUser({ id: user?._id as string, userData: data }))
      .unwrap()
      .then(() => {
        dispatch(
          displayToast({ message: 'Datos actualizados', type: 'success' })
        );
      });
  };

  useFocusEffect(
    useCallback(() => {
      if (userInfoErrorMessage) {
        dispatch(
          displayToast({ message: userInfoErrorMessage, type: 'error' })
        );
        dispatch(clearUserInfoErrorMessage());
      }
    }, [userInfoErrorMessage])
  );

  useFocusEffect(
    useCallback(() => {
      onSetForm(userFormData ?? initialForm);

      return () => {
        onResetForm();
      };
    }, [])
  );

  const onChangeCountry = (id: string, value: string) => {
    onInputChange(id, value);
    setCountryIdSelected(value);
  };

  const logout = async () => {
    await removeToken();
    dispatch(onLogout(null));
  };

  if (areLoadingCountries) {
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
            onChange={onChangeCountry}
            hasError={!!errors?.country}
            disabled
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
            disabled
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
            value={balance.toFixed(2)}
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
            isLoading={isLoadingUserInfo}
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
