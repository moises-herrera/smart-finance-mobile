import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'smart-finance-frontend',
  slug: 'smart-finance-frontend',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.smartfinance.smartfinance',
  },
  web: {
    favicon: './src/assets/images/chart.svg',
  },
  plugins: ['expo-font'],
  extra: {
    EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
    eas: {
      projectId: 'c0c8634c-2029-4e59-ab7d-21dd61eafbfe',
    },
  },
};

export default config;
