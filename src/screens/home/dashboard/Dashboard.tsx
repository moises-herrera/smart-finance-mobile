import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { BalanceCard, Loading, StocksList } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { clearErrorMessage, getAcquiredStocks } from 'src/redux/acquired-stock';
import { displayToast } from 'src/redux/ui';
import { parseAcquiredStocks } from 'src/helpers';
import { useFocusEffect } from '@react-navigation/native';

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ auth: { user } }) => user);
  const isLoadingUserBalance = useAppSelector(
    ({ auth: { isLoadingUserBalance } }) => isLoadingUserBalance
  );
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

  useFocusEffect(
    useCallback(() => {
      dispatch(getAcquiredStocks());
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      if (errorMessage) {
        dispatch(displayToast({ message: errorMessage, type: 'error' }));
        dispatch(clearErrorMessage());
      }
    }, [errorMessage])
  );

  return (
    <View style={styles.container}>
      <BalanceCard
        balance={user?.balance ?? 0}
        name={user?.fullName as string}
        isLoadingBalance={isLoadingUserBalance}
      />
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
