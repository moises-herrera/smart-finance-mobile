import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { formatCurrency } from 'src/helpers';
import { Currency } from 'src/interfaces/country';

interface BalanceCardProps {
  balance: number;
  name: string;
  isLoadingBalance?: boolean;
  currency: Currency;
}

export const BalanceCard: FC<BalanceCardProps> = ({
  balance,
  name,
  isLoadingBalance = false,
  currency,
}) => {
  const balanceFormatted = formatCurrency(balance, currency?.code || 'COP');
  const balanceLabel = !isLoadingBalance ? balanceFormatted : 'Cargando...';

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardText}>Saldo</Text>
        <Text style={styles.balance}>{balanceLabel}</Text>
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
