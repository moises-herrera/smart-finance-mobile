import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Stock } from 'src/interfaces';
import { globalStyles } from 'src/styles';

interface StockListItemProps extends Stock {}

export const StockListItem: FC<StockListItemProps> = ({
  label,
  symbol,
  price,
  currency,
  conversionCurrency,
}) => {
  console.log(currency);
  const currencyReference = conversionCurrency || currency;
  return (
    <View style={styles.container}>
      <View>
        <Text style={[globalStyles.subTitle, { width: '80%' }]}>{label}</Text>
        <Text>{symbol}</Text>
      </View>
      <Text
        style={[globalStyles.subTitle, { fontSize: 14, textAlign: 'right' }]}
      >
        {`${currencyReference.code} ${price.toFixed(2)}`}
      </Text>
    </View>
  );
};
