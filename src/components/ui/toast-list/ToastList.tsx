import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Toast } from '../toast';
import { closeToast } from 'src/redux/ui';
import { styles } from './styles';

export const ToastList = () => {
  const toastNotifications = useAppSelector(
    ({ ui: { toastNotifications } }) => toastNotifications
  );
  const dispatch = useAppDispatch();

  const onCloseToast = (index: number) => {
    dispatch(closeToast(index));
  };

  return (
    <View style={styles.list}>
      {toastNotifications.map((toast, index) => (
        <Toast key={index} {...toast} onClose={() => onCloseToast(index)} />
      ))}
    </View>
  );
};
