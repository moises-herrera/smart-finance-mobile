import { FC, useEffect, useState } from 'react';
import { FormControl, Select, Input, Button, Loading } from 'src/components/ui';
import { useAppDispatch, useForm } from 'src/hooks';
import {
  Broker,
  FormSubmitHandler,
  OperationInfo,
  SelectOption,
} from 'src/interfaces';
import {
  OperationSchema,
  OperationSchemaType,
} from 'src/components/finance/complete-operation/schemas';
import { View } from 'react-native';
import { styles } from './styles';
import { smartFinanceApi } from 'src/api';
import { displayToast } from 'src/redux/ui';

interface CompleteOperationProps {
  operationInfo: OperationInfo;
}

const initialForm: OperationSchemaType = {
  broker: '',
  amount: 0,
};

export const CompleteOperation: FC<CompleteOperationProps> = ({
  operationInfo,
}) => {
  const dispatch = useAppDispatch();
  const [brokers, setBrokers] = useState<SelectOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getBrokersByStock = async () => {
    try {
      setIsLoading(true);
      const { data } = await smartFinanceApi.get<Broker[]>('/broker', {
        params: {
          stockId: operationInfo.stockId,
        },
      });

      const brokerOptions = data.map(({ _id, name }) => ({
        value: _id,
        label: name,
      }));

      setBrokers(brokerOptions);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      dispatch(
        displayToast({ type: 'error', message: 'Ha ocurrido un error' })
      );
    }
  };

  useEffect(() => {
    getBrokersByStock();
  }, []);

  const {
    formState: { broker, amount },
    handleSubmit,
    onInputChange,
    onBlur,
    errors,
  } = useForm<OperationSchemaType>(initialForm, OperationSchema);

  const onComplete: FormSubmitHandler<OperationSchemaType> = (data) => {};

  return !isLoading ? (
    <>
      <View style={styles.form}>
        <FormControl label="Broker" fieldError={errors?.broker}>
          <Select
            id="broker"
            options={brokers}
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
  ) : (
    <Loading />
  );
};
