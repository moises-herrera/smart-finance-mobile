import { StyleSheet } from 'react-native';
import { globalStyles } from 'src/styles';
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
    ...globalStyles.boxShadow,
  },
  dateLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: appTheme.colors.darkGray,
    textAlign: 'right',
    paddingRight: 10,
  },
});
