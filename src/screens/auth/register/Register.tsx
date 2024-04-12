import { View, Text, ScrollView } from 'react-native';
import { FC } from 'react';
import { globalStyles } from 'src/styles';
import { Button, Divider, FormControl, Input, Select } from 'src/components';
import { appTheme } from 'src/theme';
import { styles } from 'src/screens/auth/styles';
import { useForm } from 'src/hooks';
import { AuthStackParamList, FormSubmitHandler } from 'src/interfaces';
import { StackScreenProps } from '@react-navigation/stack';
import {
  RegisterSchema,
  RegisterSchemaType,
} from 'src/screens/auth/register/schemas';
import { countries, currencies } from 'src/mock';

interface RegisterProps
  extends StackScreenProps<AuthStackParamList, 'Register'> {}

const initialForm: RegisterSchemaType = {
  fullName: '',
  email: '',
  country: '',
  currency: '',
  password: '',
  confirmPassword: '',
};

export const Register: FC<RegisterProps> = ({ navigation }) => {
  const {
    formState: {
      fullName,
      email,
      country,
      currency,
      password,
      confirmPassword,
    },
    onInputChange,
    onBlur,
    handleSubmit,
    errors,
  } = useForm<RegisterSchemaType>(initialForm, RegisterSchema);

  const onSubmit: FormSubmitHandler<RegisterSchemaType> = () => {};

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

      <Button label="Registrarse" onPress={() => handleSubmit(onSubmit)} />

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
