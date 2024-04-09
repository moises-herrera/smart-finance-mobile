import { StyleSheet } from 'react-native';
import { globalStyles } from 'src/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    ...globalStyles.subTitle,
    marginBottom: 5,
  },
});
