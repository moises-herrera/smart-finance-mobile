import { StyleSheet } from 'react-native';
import { appTheme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: { width: '100%', alignItems: 'flex-start', marginBottom: 22 },
  form: { width: '100%', gap: 12, marginBottom: 36 },
});
