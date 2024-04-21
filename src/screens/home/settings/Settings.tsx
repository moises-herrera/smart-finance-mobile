import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from 'src/styles';
import { Button, FormControl, Input, Select } from 'src/components';
import { countries, currencies } from 'src/mock';
import {
  SettingsSchema,
  SettingsSchemaType,
} from 'src/screens/home/settings/schemas';
import { useAppDispatch, useForm } from 'src/hooks';
import { FormSubmitHandler } from 'src/interfaces';
import { appTheme } from 'src/theme';
import { onLogout } from 'src/redux/auth';
import { removeToken } from 'src/helpers';

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
  const {
    formState: { fullName, email, country, currency, balance, password },
    onInputChange,
    onBlur,
    handleSubmit,
    errors,
  } = useForm<SettingsSchemaType>(initialForm, SettingsSchema);

  const onSubmit: FormSubmitHandler<SettingsSchemaType> = () => {};

  const logout = async () => {
    await removeToken();
    dispatch(onLogout(null));
  };

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
            options={countries}
            onChange={onInputChange}
            hasError={!!errors?.country}
          />
        </FormControl>

        <FormControl label="Moneda" fieldError={errors?.currency}>
          <Select
            id="currency"
            value={currency}
            options={currencies}
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

        <View style={{ height: 150, marginTop: 24, flexDirection: 'column', gap: 12 }}>
          <Button label="Guardar" onPress={() => handleSubmit(onSubmit)} />
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
