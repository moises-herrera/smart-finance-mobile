import { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList, FormSubmitHandler } from 'src/interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { styles } from 'src/screens/auth/styles';
import { FormControl, Input, Button } from 'src/components';
import { useForm } from 'src/hooks';
import {
  ResetPasswordSchema,
  ResetPasswordSchemaType,
} from 'src/screens/auth/reset-password/schemas';

interface ResetPasswordProps
  extends StackScreenProps<AuthStackParamList, 'ResetPassword'> {}

const initialForm: ResetPasswordSchemaType = {
  password: '',
  confirmPassword: '',
};

export const ResetPassword: FC<ResetPasswordProps> = ({ navigation }) => {
  const {
    formState: { password, confirmPassword },
    onBlur,
    onInputChange,
    handleSubmit,
    errors,
  } = useForm<ResetPasswordSchemaType>(initialForm, ResetPasswordSchema);

  const onSubmit: FormSubmitHandler<ResetPasswordSchemaType> = () => {};

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

      <Button label="Guardar" onPress={() => handleSubmit(onSubmit)} />
    </ScrollView>
  );
};
