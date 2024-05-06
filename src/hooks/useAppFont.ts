import { useFonts } from 'expo-font';

export const useAppFont = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('../assets/fonts/inter/Inter-Light.ttf'),
    'Inter-Regular': require('../assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/inter/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/inter/Inter-Bold.ttf'),
  });

  return {
    fontsLoaded,
    fontError,
  };
};
