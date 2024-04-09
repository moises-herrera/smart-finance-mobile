import { View } from 'react-native';
import { styles } from './styles';
import { BalanceCard, StocksList } from 'src/components';
import { stocks } from 'src/mock';

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <BalanceCard balance={10000} name="John Doe" />
      <StocksList title="Acciones destacadas" stocks={stocks.slice(0, 5)} />
    </View>
  );
};
