import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

/**
 * List of all the routes of the bottom tab navigation.
 */
export type TabParamList = {
  Dashboard: undefined;
  Operations: undefined;
  Market: undefined;
  Settings: undefined;
};

/**
 * Bottom tab navigation props for the app.
 */
export type BottomTabNavigationProp = MaterialBottomTabNavigationProp<TabParamList>;
