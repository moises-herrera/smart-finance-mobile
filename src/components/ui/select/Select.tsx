import { FC } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SelectOption } from 'src/interfaces';
import { appTheme } from 'src/theme';
import { styles } from './styles';

interface SelectProps {
  id: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange: (id: string, value: string) => void;
  hasError?: boolean;
  disabled?: boolean;
  style?: View['props']['style'];
}

export const Select: FC<SelectProps> = ({
  id,
  options,
  placeholder = 'Seleccionar',
  value = '',
  onChange,
  hasError,
  disabled = false,
  style = {},
}) => {
  const onSelectValue = (value: string) => {
    onChange(id, value);
  };

  return (
    <View
      id={id}
      style={[
        styles.selectContainer,
        style,
        hasError && {
          borderColor: appTheme.colors.error.primary,
        },
        disabled && {
          opacity: 0.6,
        },
      ]}
    >
      <RNPickerSelect
        placeholder={{ label: placeholder, value: '' }}
        items={options}
        onValueChange={onSelectValue}
        value={value}
        disabled={disabled}
      />
    </View>
  );
};
