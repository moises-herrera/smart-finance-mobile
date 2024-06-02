import { HomeTabParamList } from './app-navigation.type';

/**
 * Navigation auth routes for the app.
 */
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  RecoveryCode: undefined;
  ResetPassword: undefined;
  Home: {
    screen: keyof HomeTabParamList;
  };
};
