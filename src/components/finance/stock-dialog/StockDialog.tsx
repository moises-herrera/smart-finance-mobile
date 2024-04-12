import { FC, useState } from 'react';
import { View, Pressable } from 'react-native';
import { Dialog } from 'src/components/ui';
import { OperationInfo } from 'src/interfaces';
import { AntDesign } from '@expo/vector-icons';
import { StartOperation } from 'src/components/finance/start-operation';
import { CompleteOperation } from 'src/components/finance/complete-operation';

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
