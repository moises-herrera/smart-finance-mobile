import { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList, FormSubmitHandler } from '../../../interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../../styles';
import { styles } from '../styles';
import { FormControl, Input, Button } from '../../../components';
import { useForm } from '../../../hooks';
import { ForgotPasswordSchema, ForgotPasswordSchemaType } from './schemas';

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
