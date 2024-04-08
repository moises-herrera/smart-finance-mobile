import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from 'src/navigation/AppNavigator';

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
