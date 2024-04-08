import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { ScrollView } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/inter/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/inter/Inter-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      onLayout={onLayoutRootView}
    ></ScrollView>
  );
}

registerRootComponent(App);
