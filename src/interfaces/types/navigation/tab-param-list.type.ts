import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { AuthStackParamList } from './auth-stack-param-list.type';

/**
 * List of all the routes of the bottom tab navigation.
 */
export type TabParamList = {
  Dashboard: undefined;
  Operations: undefined;
  Market: undefined;
  Settings: undefined;
  Auth: {
    screen: keyof AuthStackParamList;
  }
};

/**
 * Bottom tab navigation props for the app.
 */
export type BottomTabNavigationProp = MaterialBottomTabNavigationProp<TabParamList>;
