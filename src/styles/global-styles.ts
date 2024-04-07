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
    color: appTheme.colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: appTheme.colors.black,
    fontSize: 12,
    fontWeight: '500',
  },
  textBase: {
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
