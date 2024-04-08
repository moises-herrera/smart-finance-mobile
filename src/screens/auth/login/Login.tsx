import { View, Text, ScrollView } from 'react-native';
import { FC } from 'react';
import { globalStyles } from '../../../styles';
import { Button, Divider, FormControl, Input } from '../../../components';
import { appTheme } from '../../../theme';
import { styles } from '../styles';
import { useForm } from '../../../hooks';
import { LoginSchema, LoginSchemaType } from './schemas';
import { AuthStackParamList, FormSubmitHandler } from '../../../interfaces';
import { StackScreenProps } from '@react-navigation/stack';

interface LoginProps extends StackScreenProps<AuthStackParamList, 'Login'> {}

const initialForm: LoginSchemaType = {
  email: '',
  password: '',
};

export const Login: FC<LoginProps> = ({ navigation }) => {
  const {
    formState: { email, password },
    onInputChange,
    onBlur,
    handleSubmit,
    errors,
  } = useForm<LoginSchemaType>(initialForm, LoginSchema);

  const onSubmit: FormSubmitHandler<LoginSchemaType> = () => {};

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
        <Text style={globalStyles.title}>Bienvenido!</Text>
        <Text style={globalStyles.subTitle}>Ingresa a tu cuenta</Text>
      </View>

      <View style={styles.form}>
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

        <Text
          style={[
            globalStyles.subTitle,
            { textAlign: 'right', color: appTheme.colors.blue },
          ]}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </View>

      <Button label="Log In" onPress={() => handleSubmit(onSubmit)} />

      <Divider />

      <Text style={[globalStyles.subTitle, { textAlign: 'center' }]}>
        ¿No tienes cuenta?{' '}
        <Text
          style={{ color: appTheme.colors.blue }}
          onPress={() => navigation.navigate('Register')}
        >
          Regístrate
        </Text>
      </Text>
    </ScrollView>
  );
};
