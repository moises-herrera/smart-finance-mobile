import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  card: {
    height: 106,
    width: 310,
    backgroundColor: appTheme.colors.black,
    marginHorizontal: 8,
    borderRadius: 6,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 12,
  },
  cardText: {
    fontFamily: 'Inter-Light',
    color: appTheme.colors.white,
    fontSize: 18,
    fontWeight: '200',
  },
  balance: {
    fontFamily: 'Inter-Bold',
    color: appTheme.colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
