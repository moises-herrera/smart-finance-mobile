import { FC, useState } from 'react';
import { View, Pressable } from 'react-native';
import { Dialog } from 'src/components/ui';
import { OperationInfo } from 'src/interfaces';
import { AntDesign } from '@expo/vector-icons';
import { StartOperation } from 'src/components/finance/start-operation';
import { CompleteOperation } from 'src/components/finance/complete-operation';
import { styles } from './styles';

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

  const closeDialog = (): void => {
    onClose();
    setOperationStep(0);
  };

  return (
    <Dialog isOpen={isOpen} onClose={closeDialog}>
      {operationStep !== 0 && (
        <Pressable
          style={styles.backButton}
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

        {operationStep === 1 && (
          <CompleteOperation
            operationInfo={operationInfo}
            closeDialog={closeDialog}
          />
        )}
      </View>
    </Dialog>
  );
};
