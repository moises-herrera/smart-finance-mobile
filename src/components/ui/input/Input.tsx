import { FC } from 'react';
import { Keyboard, KeyboardTypeOptions, TextInput } from 'react-native';
import { globalStyles } from 'src/styles';

export interface InputProps {
  id?: string;
  value?: string;
  placeholder?: string;
  onChange: (id: string, value: string) => void;
  onBlur?: (id: string) => void;
  type?: KeyboardTypeOptions;
  style?: TextInput['props']['style'];
  autoCapitalize?: TextInput['props']['autoCapitalize'];
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  hasError?: boolean;
}

export const Input: FC<InputProps> = ({
  id = '',
  value = '',
  placeholder = '',
  onChange,
  onBlur,
  type,
  style = globalStyles.input,
  autoCapitalize = 'none',
  secureTextEntry = false,
  multiline = false,
  numberOfLines,
  hasError = false,
}) => {
  const onChangeText = (value: string) => {
    onChange(id, value);
  };

  return (
    <TextInput
      id={id}
      nativeID={id}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={() => onBlur && onBlur(id)}
      keyboardType={type}
      secureTextEntry={secureTextEntry}
      style={[style, hasError && globalStyles.errorInput]}
      autoCapitalize={autoCapitalize}
      textAlignVertical={multiline ? 'top' : 'center'}
      multiline={multiline}
      numberOfLines={
        multiline && numberOfLines ? numberOfLines : multiline ? 4 : 1
      }
    />
  );
};
