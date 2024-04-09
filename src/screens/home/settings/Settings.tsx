import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from 'src/styles';
import { Button, FormControl, Input, Select } from 'src/components';
import { countries } from 'src/mock';
import {
  SettingsSchema,
  SettingsSchemaType,
} from 'src/screens/home/settings/schemas';
import { useForm } from 'src/hooks';
import { FormSubmitHandler } from 'src/interfaces';
import { useEffect } from 'react';

const initialForm: SettingsSchemaType = {
  fullName: '',
  email: '',
  country: '',
  password: '',
};

export const Settings = () => {
  const {
    formState: { fullName, email, country, password },
    onInputChange,
    onBlur,
    handleSubmit,
    onSetForm,
    errors,
  } = useForm<SettingsSchemaType>(initialForm, SettingsSchema);

  const onSubmit: FormSubmitHandler<SettingsSchemaType> = () => {};

  useEffect(() => {
    onSetForm({
      fullName: 'John Doe',
      email: 'john@email.com',
      country: 'CO',
      password: '',
    });
  }, []);

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

        <View style={{ marginTop: 24 }}>
          <Button label="Guardar" onPress={() => handleSubmit(onSubmit)} />
        </View>
      </View>
    </ScrollView>
  );
};
