import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { formatCurrency } from 'src/helpers';

interface BalanceCardProps {
  balance: number;
  name: string;
  isLoadingBalance?: boolean;
}

export const BalanceCard: FC<BalanceCardProps> = ({
  balance,
  name,
  isLoadingBalance = false,
}) => {
  const balanceFormatted = formatCurrency(balance);
  const balaceLabel = !isLoadingBalance ? balanceFormatted : 'Cargando..';

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardText}>Saldo</Text>
        <Text style={styles.balance}>{balaceLabel}</Text>
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
