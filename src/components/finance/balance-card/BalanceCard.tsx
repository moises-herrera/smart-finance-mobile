import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { formatCurrency } from 'src/helpers';

interface BalanceCardProps {
  balance: number;
  name: string;
}

export const BalanceCard: FC<BalanceCardProps> = ({ balance, name }) => {
  const balanceFormatted = formatCurrency(balance);

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardText}>Saldo</Text>
        <Text style={styles.balance}>{balanceFormatted}</Text>
      </View>
      <Text
        style={[
          styles.cardText,
          {
            textAlign: 'right',
          },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};
