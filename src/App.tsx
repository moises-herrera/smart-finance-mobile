import { useCallback } from 'react';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { AppNavigationContainer } from 'src/navigation';
import { useAppFont } from './hooks/useAppFont';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, fontError } = useAppFont();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigationContainer />
    </View>
  );
}

registerRootComponent(App);
