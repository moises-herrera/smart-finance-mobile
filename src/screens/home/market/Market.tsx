import { View } from 'react-native';
import { StocksList } from 'src/components';
import { stocks } from 'src/mock';
import { styles } from './styles';

export const Market = () => {
  return (
    <View style={styles.container}>
      <StocksList title="Acciones" stocks={stocks} />
    </View>
  );
};
