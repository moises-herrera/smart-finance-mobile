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
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={globalStyles.subTitle}>{label}</Text>
        <Text>{symbol}</Text>
      </View>
      <Text
        style={[globalStyles.subTitle, { fontSize: 14, textAlign: 'right' }]}
      >
        {price}
      </Text>
    </View>
  );
};
