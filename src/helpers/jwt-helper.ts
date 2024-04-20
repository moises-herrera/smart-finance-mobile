import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Get token from async storage.
 *
 * @returns The access token.
 */
export const getToken = async (): Promise<string> => {
  const token = (await AsyncStorage.getItem('accessToken')) || '';
  return token;
};

/**
 * Set token to async storage.
 *
 * @param token The access token.
 */
export const setToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem('accessToken', token);
};

/**
 * Remove token from async storage.
 */
export const removeToken = async (): Promise<void> => {
  await AsyncStorage.removeItem('accessToken');
};
