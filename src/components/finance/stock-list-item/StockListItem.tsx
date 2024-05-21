import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { StockInfoItem } from 'src/interfaces';
import { globalStyles } from 'src/styles';
import { formatCurrency } from 'src/helpers';

interface StockListItemProps extends StockInfoItem {}

export const StockListItem: FC<StockListItemProps> = ({
  label,
  symbol,
  quantity,
  amount,
  currency,
  conversionCurrency,
}) => {
  const currencyReference = conversionCurrency || currency;
  return (
    <View style={styles.container}>
      <View>
        <Text style={[globalStyles.subTitle, { width: '80%' }]}>{label}</Text>
        <Text>{symbol}</Text>
      </View>
      <View>
        {quantity && (
          <Text
            style={[
              globalStyles.subTitle,
              { fontSize: 14, textAlign: 'right' },
            ]}
          >
            {`x${quantity.toLocaleString('en-US', {
              maximumSignificantDigits: 5,
            })}`}
          </Text>
        )}
        <Text
          style={[globalStyles.subTitle, { fontSize: 14, textAlign: 'right' }]}
        >
          {formatCurrency(amount, currencyReference.code)}
        </Text>
      </View>
    </View>
  );
};
