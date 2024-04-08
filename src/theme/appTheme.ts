import { DefaultTheme, MD3Theme } from 'react-native-paper';

export const appTheme = {
  colors: {
    primary: '#06C35D',
    secondary: '#E6E5E7',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#E6E5E7',
    darkGray: '#757575',
    blue: '#469FEB',
    error: {
      primary: '#ff5757',
      secondary: '#fdedec',
    },
    success: {
      primary: '#20aa7d',
      secondary: '#eaf9f3',
    },
  },
};

export const paperTheme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent',
  },
};
