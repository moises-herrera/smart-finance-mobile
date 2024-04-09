import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator, ProtectedNavigator } from 'src/navigation/navigators';
import { AppStackParamList } from 'src/interfaces';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={ProtectedNavigator} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
};
