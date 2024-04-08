import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  codeBox: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: appTheme.colors.gray,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 20,
  },
});
