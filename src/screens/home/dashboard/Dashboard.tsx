import { View } from 'react-native';
import { styles } from './styles';
import { BalanceCard, Loading, StocksList } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { useEffect, useMemo } from 'react';
import { clearErrorMessage, getAcquiredStocks } from 'src/redux/acquired-stock';
import { displayToast } from 'src/redux/ui';
import { parseAcquiredStocks } from 'src/helpers';

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const userFullName = useAppSelector(({ auth: { user } }) => user?.fullName);
  const balance = useAppSelector(({ auth: { user } }) => user?.balance || 0);
  const stocks = useAppSelector(
    ({ acquiredStock: { acquiredStocks } }) => acquiredStocks
  );
  const isLoading = useAppSelector(
    ({ acquiredStock: { isLoading } }) => isLoading
  );
  const errorMessage = useAppSelector(
    ({ acquiredStock: { errorMessage } }) => errorMessage
  );
  const stocksList = useMemo(() => {
    return parseAcquiredStocks(stocks);
  }, [stocks]);

  useEffect(() => {
    dispatch(getAcquiredStocks());
  }, []);

  useEffect(() => {
    if (errorMessage) {
      dispatch(displayToast({ message: errorMessage, type: 'error' }));
      dispatch(clearErrorMessage());
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <BalanceCard balance={balance} name={userFullName as string} />
      {!isLoading ? (
        <StocksList
          title="Acciones adquiridas"
          stocks={stocksList}
          isBuy={false}
        />
      ) : (
        <View style={{ marginTop: 30 }}>
          <Loading />
        </View>
      )}
    </View>
  );
};
