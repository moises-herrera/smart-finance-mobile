import { FC } from 'react';
import { View, Text } from 'react-native';
import { formatCurrency } from 'src/helpers';
import { styles } from './styles';
import { Button } from 'src/components/ui';
import { OperationInfo } from 'src/interfaces';

interface OperationInfoProps {
  operationInfo: OperationInfo;
  onStartOperation: () => void;
}

export const StartOperation: FC<OperationInfoProps> = ({
  operationInfo: { label, symbol, quantity: amount, isBuy },
  onStartOperation,
}) => {
  const buttonLabel = isBuy ? 'Comprar' : 'Vender';

  return (
    <>
      <View>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.symbolText}>{symbol}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.stockAmount}>{formatCurrency(amount)}</Text>
        <Text style={styles.currencyText}>USD</Text>
      </View>

      <View
        style={{
          paddingBottom: 12,
        }}
      >
        <Button label={buttonLabel} onPress={onStartOperation} />
      </View>
    </>
  );
};
