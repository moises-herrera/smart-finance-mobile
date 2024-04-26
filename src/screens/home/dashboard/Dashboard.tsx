import { View } from 'react-native';
import { styles } from './styles';
import { BalanceCard, StocksList } from 'src/components';
import { stocks } from 'src/mock';
import { useAppSelector } from 'src/hooks';

export const Dashboard = () => {
  const userFullName = useAppSelector(({ auth: { user } }) => user?.fullName);
  const balance = useAppSelector(({ auth: { user } }) => user?.balance || 0);

  return (
    <View style={styles.container}>
      <BalanceCard balance={balance} name={userFullName as string} />
      <StocksList title="Acciones destacadas" stocks={stocks.slice(0, 5)} />
    </View>
  );
};
