import { StyleSheet } from 'react-native';
import { appTheme } from '../theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: appTheme.colors.black,
    fontSize: 28,
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: 'Inter-Medium',
    color: appTheme.colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  textBase: {
    fontFamily: 'Inter-Regular',
    color: appTheme.colors.black,
    fontSize: 12,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: appTheme.colors.gray,
    padding: 10,
    width: '100%',
    borderRadius: 6,
  },
  errorText: {
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});
