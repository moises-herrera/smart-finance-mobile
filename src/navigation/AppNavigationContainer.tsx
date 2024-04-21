import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { AppNavigator } from 'src/navigation/AppNavigator';
import { store } from 'src/redux/store';
import { paperTheme } from 'src/theme';

export const AppNavigationContainer = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider theme={paperTheme}>
          <AppNavigator />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};
