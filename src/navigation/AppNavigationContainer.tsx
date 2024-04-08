import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { AppNavigator } from 'src/navigation/AppNavigator';
import { paperTheme } from 'src/theme';

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={paperTheme}>
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};
