import { FC, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList, FormSubmitHandler } from 'src/interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { styles } from 'src/screens/auth/styles';
import { FormControl, Input, Button } from 'src/components';
import { useAppDispatch, useAppSelector, useForm } from 'src/hooks';
import {
  ResetPasswordSchema,
  ResetPasswordSchemaType,
} from 'src/screens/auth/reset-password/schemas';
import { displayToast } from 'src/redux/ui';
import { clearToken } from 'src/redux/otp';
import axios from 'axios';
import { expoExtraConfig } from 'src/constants';

interface ResetPasswordProps
  extends StackScreenProps<AuthStackParamList, 'ResetPassword'> {}

const initialForm: ResetPasswordSchemaType = {
  password: '',
  confirmPassword: '',
};

export const ResetPassword: FC<ResetPasswordProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(({ otp: { token } }) => token);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    formState: { password, confirmPassword },
    onBlur,
    onInputChange,
    handleSubmit,
    errors,
  } = useForm<ResetPasswordSchemaType>(initialForm, ResetPasswordSchema);

  const onSubmit: FormSubmitHandler<ResetPasswordSchemaType> = async (data) => {
    try {
      setIsLoading(true);
      await axios.post(
        `${expoExtraConfig?.API_URL}/api/user/reset-password`,
        {
          password: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      dispatch(
        displayToast({ message: 'Contraseña actualizada', type: 'success' })
      );
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      dispatch(
        displayToast({ message: 'Ha ocurrido un error', type: 'error' })
      );
      dispatch(clearToken());
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        globalStyles.container,
        {
          paddingTop: 150,
          justifyContent: 'flex-start',
          paddingHorizontal: 35,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={globalStyles.title}>Recuperar contraseña</Text>
        <Text style={globalStyles.subTitle}>
          Ingresa tu correo para restablecer tu contraseña
        </Text>
      </View>

      <View style={styles.form}>
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
        label="Guardar"
        onPress={() => handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </ScrollView>
  );
};
