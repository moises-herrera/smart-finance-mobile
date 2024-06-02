import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  listContainer: {
    marginTop: 30,
    height: '100%',
    width: '100%',
  },
  list: {
    marginTop: 10,
    width: '100%',
    backgroundColor: appTheme.colors.white,
    borderRadius: 6,
    shadowColor: appTheme.colors.black,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    elevation: 0.8,
  },
});
