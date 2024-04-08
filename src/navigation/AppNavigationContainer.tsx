import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
