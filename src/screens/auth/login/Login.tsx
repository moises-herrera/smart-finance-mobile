import { View, Text, ScrollView } from 'react-native';
import { FC } from 'react';
import { globalStyles } from 'src/styles';
import { Button, Divider, FormControl, Input } from 'src/components';
import { appTheme } from 'src/theme';
import { styles } from 'src/screens/auth/styles';
import { useForm } from 'src/hooks';
import { LoginSchema, LoginSchemaType } from 'src/screens/auth/login/schemas';
import { AuthStackParamList, FormSubmitHandler } from 'src/interfaces';
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
          onPress={() => navigation.navigate('ForgotPassword')}
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
