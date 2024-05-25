import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { StockInfoItem } from 'src/interfaces';
import { globalStyles } from 'src/styles';
import {
  formatCurrency,
  formatWithMaximumSignificantDigits,
} from 'src/helpers';

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
  const quantityFormatted = formatWithMaximumSignificantDigits(
    quantity ?? 0,
    5
  );

  return (
    <View style={styles.container}>
      <View style={{ width: '45%' }}>
        <Text style={[globalStyles.subTitle]} numberOfLines={3}>
          {label}
        </Text>
        <Text>{symbol}</Text>
      </View>
      <View style={{ width: 'auto' }}>
        {quantity && (
          <Text
            style={[
              globalStyles.subTitle,
              { fontSize: 14, textAlign: 'right' },
            ]}
          >
            {`x${quantityFormatted}`}
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
