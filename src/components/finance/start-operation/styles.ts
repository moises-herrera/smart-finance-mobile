import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  labelText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  symbolText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
  stockAmount: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    textAlign: 'center',
  },
  amountContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  currencyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: appTheme.colors.darkGray,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 10,
  },
});
