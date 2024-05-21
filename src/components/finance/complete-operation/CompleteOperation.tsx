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
import { validateNumberInput } from 'src/helpers';

interface CompleteOperationProps {
  operationInfo: OperationInfo;
  closeDialog: () => void;
}

const initialForm: OperationSchemaType = {
  broker: '',
  quantity: '',
  moneyAmount: '',
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
    formState: { broker, quantity, moneyAmount },
    handleSubmit,
    onInputChange,
    onBlur,
    onSetForm,
    errors,
  } = useForm<OperationSchemaType>(initialForm, OperationSchema);

  const onComplete: FormSubmitHandler<OperationSchemaType> = (data) => {
    const quantity = Number(data.quantity);

    if (quantity <= 0) {
      return;
    }

    Keyboard.dismiss();
    const operationData: CreateOperation = {
      stock: operationInfo.stockId,
      type: operationInfo.isBuy ? OperationType.Purchase : OperationType.Sale,
      ...data,
      quantity,
    };
    dispatch(createOperation(operationData)).then(() => {
      closeDialog();
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

  const onChangeStockQuantity = (_id: string, value: string): void => {
    const cleanValue = validateNumberInput(value);
    const stocksQuantity = Number(cleanValue);
    const moneyAmount = Number(
      Number(stocksQuantity * operationInfo.price).toFixed(2)
    );
    onSetForm({
      broker,
      quantity: cleanValue,
      moneyAmount: moneyAmount.toString(),
    });
  };

  const onChangeMoneyAmount = (_id: string, value: string): void => {
    const cleanValue = validateNumberInput(value);
    const moneyAmountParsed = Number(Number(cleanValue).toFixed(2));
    const stocksQuantity = Number(
      Number(moneyAmountParsed / operationInfo.price).toFixed(4)
    );
    onSetForm({
      broker,
      quantity: stocksQuantity.toString(),
      moneyAmount: moneyAmountParsed.toString(),
    });
  };

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

        <FormControl label="Cantidad de acciones" fieldError={errors?.quantity}>
          <Input
            id="quantity"
            type="number-pad"
            value={quantity.toString()}
            onChange={onChangeStockQuantity}
            onBlur={onBlur}
            hasError={!!errors?.quantity}
          />
        </FormControl>

        <FormControl
          label="Cantidad monetaria"
          fieldError={errors?.moneyAmount}
        >
          <Input
            id="moneyAmount"
            type="number-pad"
            value={moneyAmount.toString()}
            onChange={onChangeMoneyAmount}
            onBlur={onBlur}
            hasError={!!errors?.moneyAmount}
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
