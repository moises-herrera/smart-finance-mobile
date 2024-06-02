import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeTabParamList } from 'src/interfaces';
import { Dashboard, Market, Operations, Settings } from 'src/screens/home';
import { appTheme } from 'src/theme';
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { APP_NAME } from 'src/constants';
import { globalStyles } from 'src/styles';

const Tab = createMaterialBottomTabNavigator<HomeTabParamList>();

export const ProtectedNavigator = () => {
  return (
    <View
      style={{
        paddingTop: 30,
        flex: 1,
        backgroundColor: appTheme.colors.lightGray,
      }}
    >
      <Text style={globalStyles.appName}>{APP_NAME}</Text>

      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor={appTheme.colors.primary}
        inactiveColor={appTheme.colors.darkGray}
        barStyle={{ backgroundColor: appTheme.colors.white }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="dashboard" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Operations"
          component={Operations}
          options={{
            tabBarLabel: 'Operaciones',
            tabBarIcon: ({ color }) => (
              <FontAwesome6
                name="arrow-right-arrow-left"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarLabel: 'Mercado',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="chart-column" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Configuración',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="gear" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
