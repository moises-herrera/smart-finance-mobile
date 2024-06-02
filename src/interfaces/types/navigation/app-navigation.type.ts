import type { NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  MaterialBottomTabNavigationProp,
  MaterialBottomTabScreenProps,
} from '@react-navigation/material-bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import { AuthStackParamList } from './auth-stack-param-list.type';

/**
 * Navigation routes for the app.
 */
export type AppStackParamList = {
  Auth: undefined;
  Home: NavigatorScreenParams<HomeTabParamList>;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

/**
 * List of all the routes of the bottom tab navigation.
 */
export type HomeTabParamList = {
  Dashboard: undefined;
  Operations: undefined;
  Market: undefined;
  Settings: undefined;
  Auth: {
    screen: keyof AuthStackParamList;
  };
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    MaterialBottomTabScreenProps<HomeTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >;

/**
 * Bottom tab navigation props for the app.
 */
export type BottomTabNavigationProp =
  MaterialBottomTabNavigationProp<HomeTabParamList>;


// Global declaration for the navigation routes.
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
