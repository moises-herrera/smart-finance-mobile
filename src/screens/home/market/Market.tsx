import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Loading, StocksList } from 'src/components';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getAvailableStocks } from 'src/redux/stock';
import { useFocusEffect } from '@react-navigation/native';
import { socket } from 'src/socket/socket';
import { displayToast } from 'src/redux/ui';

export const Market = () => {
  const dispatch = useAppDispatch();
  const userCountry = useAppSelector(({ auth: { user } }) => user?.country);
  const availableStocks = useAppSelector(({ stock: { stocks } }) => stocks);
  const areLoadingStocks = useAppSelector(
    ({ stock: { areLoadingStocks } }) => areLoadingStocks
  );
  const stockItems = availableStocks.map((stock) => ({
    ...stock,
    amount: stock.price,
  }));

  useFocusEffect(
    useCallback(() => {
      dispatch(getAvailableStocks());
    }, [userCountry])
  );

  useEffect(() => {
    socket.emit('join-market');

    socket.on('notification-from-server', ({ message }) => {
      dispatch(displayToast({ message, type: 'success' }));
    });

    return () => {
      socket.off('notification-from-server');
    };
  }, []);

  return (
    <View style={styles.container}>
      {!areLoadingStocks ? (
        <StocksList title="Acciones" stocks={stockItems} />
      ) : (
        <Loading />
      )}
    </View>
  );
};
