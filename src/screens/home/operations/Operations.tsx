import { View } from 'react-native';
import { Loading, OperationsList } from 'src/components';
import { styles } from './styles';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getUserOperations, clearErrorMessage } from 'src/redux/operation';
import { displayToast } from 'src/redux/ui';

export const Operations = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(({ operation: { isLoading } }) => isLoading);
  const operations = useAppSelector(
    ({ operation: { operations } }) => operations
  );
  const errorMessage = useAppSelector(
    ({ operation: { errorMessage } }) => errorMessage
  );

  useEffect(() => {
    dispatch(getUserOperations());
  }, []);

  useEffect(() => {
    if (errorMessage) {
      dispatch(displayToast({ message: errorMessage, type: 'error' }));
      dispatch(clearErrorMessage());
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <OperationsList title="Operaciones" operations={operations} />
      ) : (
        <Loading />
      )}
    </View>
  );
};
