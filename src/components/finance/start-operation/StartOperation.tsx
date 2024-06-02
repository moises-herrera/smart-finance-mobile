import { FC } from 'react';
import { View, Text } from 'react-native';
import { formatCurrency } from 'src/helpers';
import { styles } from './styles';
import { Button } from 'src/components/ui';
import { OperationInfo } from 'src/interfaces';
import { SvgUri } from 'react-native-svg';

interface OperationInfoProps {
  operationInfo: OperationInfo;
  onStartOperation: () => void;
}

export const StartOperation: FC<OperationInfoProps> = ({
  operationInfo: { label, symbol, icon, price, isBuy, currency },
  onStartOperation,
}) => {
  const buttonLabel = isBuy ? 'Comprar' : 'Vender';

  return (
    <>
      <View style={{ alignItems: 'center' }}>
        {icon && (
          <View style={styles.iconContainer}>
            <SvgUri uri={icon} width={80} height={80} viewBox="0 0 56 56" />
          </View>
        )}
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.symbolText}>{symbol}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.stockAmount}>
          {formatCurrency(price, currency.code)}
        </Text>
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
