import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Toast } from 'src/components/ui/toast';
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
    toastNotifications.length > 0 && (
      <View style={styles.list}>
        {toastNotifications.map((toast, index) => (
          <Toast key={index} {...toast} onClose={() => onCloseToast(index)} />
        ))}
      </View>
    )
  );
};
