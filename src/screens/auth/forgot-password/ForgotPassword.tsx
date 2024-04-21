import { FC, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList, FormSubmitHandler } from 'src/interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { styles } from 'src/screens/auth/styles';
import { FormControl, Input, Button } from 'src/components';
import { useAppDispatch, useAppSelector, useForm } from 'src/hooks';
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from 'src/screens/auth/forgot-password/schemas';
import { displayToast } from 'src/redux/ui';
import { sendOTP, setEmail } from 'src/redux/otp';

interface ForgotPasswordProps
  extends StackScreenProps<AuthStackParamList, 'ForgotPassword'> {}

const initialForm: ForgotPasswordSchemaType = { email: '' };

export const ForgotPassword: FC<ForgotPasswordProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(
    ({ otp: { errorMessage } }) => errorMessage
  );
  const isLoading = useAppSelector(({ otp: { isLoading } }) => isLoading);
  const {
    formState: { email },
    onBlur,
    onInputChange,
    handleSubmit,
    errors,
  } = useForm<ForgotPasswordSchemaType>(initialForm, ForgotPasswordSchema);

  useEffect(() => {
    if (errorMessage) {
      dispatch(
        displayToast({ message: 'Ha ocurrido un error', type: 'error' })
      );
    }
  }, [errorMessage]);

  const onSubmit: FormSubmitHandler<ForgotPasswordSchemaType> = (data) => {
    dispatch(setEmail(email));
    dispatch(sendOTP(data.email))
      .unwrap()
      .then(() => {
        navigation.navigate('RecoveryCode');
      });
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
      </View>

      <Button
        label="Enviar"
        onPress={() => handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </ScrollView>
  );
};
