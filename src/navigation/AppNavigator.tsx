import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator, ProtectedNavigator } from 'src/navigation/navigators';
import { AppStackParamList } from 'src/interfaces';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Loading } from 'src/components';
import { useEffect } from 'react';
import { validateAccessToken } from 'src/redux/auth';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(({ auth }) => auth.status);

  useEffect(() => {
    dispatch(validateAccessToken());
  }, []);

  if (status === 'loading') {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {status === 'authenticated' ? (
        <Stack.Screen name="Home" component={ProtectedNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
