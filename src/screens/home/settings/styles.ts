import { StyleSheet } from 'react-native';
import { appTheme } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.lightGray,
    height: '100%',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: 10,
    backgroundColor: appTheme.colors.white,
    borderRadius: 6,
    padding: 16,
  },
  formControl: { marginBottom: 6 },
});
