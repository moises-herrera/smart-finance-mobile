import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dialogContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 16,
    width: 310,
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 18,
  },
});

