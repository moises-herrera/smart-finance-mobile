import { FC, useState } from 'react';
import { View, Pressable } from 'react-native';
import { Dialog, FormControl, Input, Select } from 'src/components/ui';
import { formatCurrency } from 'src/helpers';
import { OperationInfo, SelectOption } from 'src/interfaces';
import { styles } from './styles';
import { brokers } from 'src/mock';
import { AntDesign } from '@expo/vector-icons';
import { StartOperation } from '../start-operation';
import { CompleteOperation } from '../complete-operation';

interface StockDialogProps {
  isOpen: boolean;
  onClose: () => void;
  operationInfo: OperationInfo;
}

export const StockDialog: FC<StockDialogProps> = ({
  isOpen,
  onClose,
  operationInfo,
}) => {
  const [operationStep, setOperationStep] = useState<number>(0);

  const onStartOperation = (): void => {
    setOperationStep(1);
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setOperationStep(0);
      }}
    >
      {operationStep !== 0 && (
        <Pressable
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 16,
            left: 16,
          }}
          onPress={() => setOperationStep(0)}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      )}

      <View style={{ marginTop: 40 }}>
        {operationStep === 0 && (
          <StartOperation
            operationInfo={operationInfo}
            onStartOperation={onStartOperation}
          />
        )}

        {operationStep === 1 && <CompleteOperation />}
      </View>
    </Dialog>
  );
};
