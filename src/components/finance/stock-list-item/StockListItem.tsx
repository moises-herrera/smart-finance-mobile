import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { StockInfoItem } from 'src/interfaces';
import { globalStyles } from 'src/styles';
import {
  formatCurrency,
  formatWithMaximumSignificantDigits,
} from 'src/helpers';
import { SvgUri } from 'react-native-svg';

interface StockListItemProps extends StockInfoItem {}

export const StockListItem: FC<StockListItemProps> = ({
  label,
  symbol,
  icon,
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
      <View style={{ flexDirection: 'row' }}>
        {icon && (
          <View style={styles.iconContainer}>
            <SvgUri width={56} height={56} uri={icon} />
          </View>
        )}
        <View style={{ width: '45%' }}>
          <Text style={[globalStyles.subTitle]} numberOfLines={3}>
            {label}
          </Text>
          <Text>{symbol}</Text>
        </View>
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
