import { FC, useEffect, useState } from 'react';
import { FormControl, Select, Input, Button, Loading } from 'src/components/ui';
import { useAppDispatch, useAppSelector, useForm } from 'src/hooks';
import {
  Broker,
  CreateOperation,
  FormSubmitHandler,
  OperationInfo,
  OperationType,
  SelectOption,
} from 'src/interfaces';
import {
  OperationSchema,
  OperationSchemaType,
} from 'src/components/finance/complete-operation/schemas';
import { Keyboard, View } from 'react-native';
import { styles } from './styles';
import { smartFinanceApi } from 'src/api';
import { displayToast } from 'src/redux/ui';
import {
  clearCreateOperationErrorMessage,
  createOperation,
} from 'src/redux/operation';
import { getUserBalance } from 'src/redux/auth';

interface CompleteOperationProps {
  operationInfo: OperationInfo;
  closeDialog: () => void;
}

const initialForm: OperationSchemaType = {
  broker: '',
  quantity: 0,
};

export const CompleteOperation: FC<CompleteOperationProps> = ({
  operationInfo,
  closeDialog,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ auth }) => auth.user);
  const isCreatingOperation = useAppSelector(
    ({ operation: { isCreatingOperation } }) => isCreatingOperation
  );
  const createOperationErrorMessage = useAppSelector(
    ({ operation: { createOperationErrorMessage } }) =>
      createOperationErrorMessage
  );

  const [brokers, setBrokers] = useState<SelectOption[]>([]);
  const [areLoadingBrokers, setAreLoadingBrokers] = useState<boolean>(false);

  const getBrokersByStock = async () => {
    setAreLoadingBrokers(true);

    try {
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
    } catch (error) {
      dispatch(
        displayToast({ type: 'error', message: 'Ha ocurrido un error' })
      );
    }

    setAreLoadingBrokers(false);
  };

  useEffect(() => {
    getBrokersByStock();
  }, []);

  const {
    formState: { broker, quantity },
    handleSubmit,
    onInputChange,
    onBlur,
    errors,
  } = useForm<OperationSchemaType>(initialForm, OperationSchema);

  const onComplete: FormSubmitHandler<OperationSchemaType> = (data) => {
    Keyboard.dismiss();
    const operationData: CreateOperation = {
      stock: operationInfo.stockId,
      type: operationInfo.isBuy ? OperationType.Purchase : OperationType.Sale,
      ...data,
    };
    dispatch(createOperation(operationData)).then(() => {
      dispatch(
        displayToast({ type: 'success', message: 'Operación completada' })
      );
      closeDialog();
      dispatch(getUserBalance(user?._id as string));
    });
  };

  useEffect(() => {
    if (createOperationErrorMessage) {
      dispatch(
        displayToast({ type: 'error', message: createOperationErrorMessage })
      );
      dispatch(clearCreateOperationErrorMessage());
    }
  }, [createOperationErrorMessage]);

  return !areLoadingBrokers ? (
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

        <FormControl label="Cantidad" fieldError={errors?.quantity}>
          <Input
            id="quantity"
            type="number-pad"
            value={quantity.toString()}
            onChange={(id, value) => onInputChange(id, Number(value))}
            onBlur={onBlur}
            hasError={!!errors?.quantity}
          />
        </FormControl>
      </View>

      <Button
        label="Completar"
        onPress={() => handleSubmit(onComplete)}
        isLoading={isCreatingOperation}
      />
    </>
  ) : (
    <Loading />
  );
};
