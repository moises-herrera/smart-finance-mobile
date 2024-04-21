import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ToastMessage } from './toast-message.type';

/**
 * The styles for the toast messages.
 */
export type ToastStyles = Record<
  ToastMessage,
  {
    container: StyleProp<ViewStyle>;
    messageContainer: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
  }
>;
