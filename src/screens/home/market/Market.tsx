import { useCallback } from 'react';
import { View } from 'react-native';
import { Loading, StocksList } from 'src/components';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getAvailableStocks } from 'src/redux/stock';
import { useFocusEffect } from '@react-navigation/native';

export const Market = () => {
  const dispatch = useAppDispatch();
  const userCountry = useAppSelector(({ auth: { user } }) => user?.country);
  const availableStocks = useAppSelector(({ stock: { stocks } }) => stocks);
  const areLoadingStocks = useAppSelector(
    ({ stock: { areLoadingStocks } }) => areLoadingStocks
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getAvailableStocks());
    }, [userCountry])
  );

  return (
    <View style={styles.container}>
      {!areLoadingStocks ? (
        <StocksList title="Acciones" stocks={availableStocks} />
      ) : (
        <Loading />
      )}
    </View>
  );
};
