import { FormControl, Select, Input, Button } from 'src/components/ui';
import { useForm } from 'src/hooks';
import { FormSubmitHandler, SelectOption } from 'src/interfaces';
import { brokers } from 'src/mock';
import {
  OperationSchema,
  OperationSchemaType,
} from 'src/components/finance/complete-operation/schemas';
import { View } from 'react-native';
import { styles } from './styles';

const brokerOptions: SelectOption[] = brokers.map(({ id, name }) => ({
  value: id,
  label: name,
}));

const initialForm: OperationSchemaType = {
  broker: '',
  amount: '',
};

export const CompleteOperation = () => {
  const {
    formState: { broker, amount },
    handleSubmit,
    onInputChange,
    onBlur,
    errors,
  } = useForm<OperationSchemaType>(initialForm, OperationSchema);

  const onComplete: FormSubmitHandler<OperationSchemaType> = (data) => {};

  return (
    <>
      <View style={styles.form}>
        <FormControl label="Broker" fieldError={errors?.broker}>
          <Select
            id="broker"
            options={brokerOptions}
            value={broker}
            onChange={onInputChange}
            hasError={!!errors?.broker}
          />
        </FormControl>

        <FormControl label="Cantidad" fieldError={errors?.amount}>
          <Input
            id="amount"
            type="number-pad"
            value={amount.toString()}
            onChange={onInputChange}
            onBlur={onBlur}
            hasError={!!errors?.amount}
          />
        </FormControl>
      </View>

      <Button label="Completar" onPress={() => handleSubmit(onComplete)} />
    </>
  );
};
