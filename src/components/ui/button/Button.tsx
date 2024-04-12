import { FC, useRef } from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: Partial<{
    button: StyleProp<ViewStyle>;
    buttonText: StyleProp<any>;
    disabled: StyleProp<ViewStyle>;
  }>;
}

export const Button: FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false,
  isLoading = false,
  style,
}) => {
  const componentStyle = {
    button: [styles.button, style?.button],
    buttonText: {
      ...styles.buttonText,
      ...style?.buttonText,
    },
    disabled: [styles.disabled, style?.disabled],
  };
  const buttonRef = useRef<View | null>(null);
  const isDisabled = disabled || isLoading;

  const onPressIn = () => {
    buttonRef.current?.setNativeProps({
      style: [componentStyle.button, componentStyle.disabled],
    });
  };

  const onPressOut = () => {
    buttonRef.current?.setNativeProps({
      style: [componentStyle.button, isDisabled && componentStyle.disabled],
    });
  };

  return (
    <Pressable
      ref={buttonRef}
      style={[componentStyle.button, isDisabled && componentStyle.disabled]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled || isLoading}
    >
      <View style={styles.content}>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={componentStyle.buttonText?.color}
          />
        )}
        <Text style={[componentStyle.buttonText]}>{label}</Text>
      </View>
    </Pressable>
  );
};
