import { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList, FormSubmitHandler } from 'src/interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { styles } from 'src/screens/auth/styles';
import { FormControl, Input, Button } from 'src/components';
import { useForm } from 'src/hooks';
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from 'src/screens/auth/forgot-password/schemas';

interface ForgotPasswordProps
  extends StackScreenProps<AuthStackParamList, 'ForgotPassword'> {}

const initialForm: ForgotPasswordSchemaType = { email: '' };

export const ForgotPassword: FC<ForgotPasswordProps> = ({ navigation }) => {
  const {
    formState: { email },
    onBlur,
    onInputChange,
    handleSubmit,
    errors,
  } = useForm<ForgotPasswordSchemaType>(initialForm, ForgotPasswordSchema);

  const onSubmit: FormSubmitHandler<ForgotPasswordSchemaType> = () => {};

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
        onPress={() => navigation.navigate('RecoveryCode')}
      />
    </ScrollView>
  );
};
