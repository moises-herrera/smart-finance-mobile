import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from 'src/styles';
import { stocks } from 'src/mock';
import { StockListItem } from '../stock-list-item';
import { Divider } from 'src/components/ui';

interface StocksListProps {
  title: string;
}

export const StocksList: FC<StocksListProps> = ({ title }) => {
  return (
    <View style={styles.listContainer}>
      <Text
        style={[
          globalStyles.title,
          {
            fontSize: 18,
            textAlign: 'left',
          },
        ]}
      >
        {title}
      </Text>

      <View style={styles.list}>
        {stocks.map((stock) => (
          <>
            <StockListItem key={stock.symbol} {...stock} />
            <Divider marginVertical={10} />
          </>
        ))}
      </View>
    </View>
  );
};
