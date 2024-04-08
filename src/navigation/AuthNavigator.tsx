import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../screens/auth';
import { AuthStackParamList } from '../interfaces';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
