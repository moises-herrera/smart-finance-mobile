import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: appTheme.colors.primary,
    padding: 12,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
  buttonText: {
    color: appTheme.colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.6,
  },
});
