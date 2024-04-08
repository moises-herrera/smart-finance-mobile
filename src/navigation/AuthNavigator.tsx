import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  Register,
  ForgotPassword,
  RecoveryCode,
  ResetPassword,
} from '../screens/auth';
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
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="RecoveryCode" component={RecoveryCode} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};
