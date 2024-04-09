import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.lightGray,
    height: '100%',
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 80,
  },
});
