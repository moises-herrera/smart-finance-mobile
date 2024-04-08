import { FC } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './styles';
import { SelectOption } from 'src/interfaces';
import { appTheme } from 'src/theme';

interface SelectProps {
  id: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange: (id: string, value: string) => void;
  hasError?: boolean;
}

export const Select: FC<SelectProps> = ({
  id,
  options,
  placeholder = 'Seleccionar',
  value = '',
  onChange,
  hasError,
}) => {
  const onSelectValue = (value: string) => {
    onChange(id, value);
  };

  return (
    <View
      id={id}
      style={[
        styles.selectContainer,
        hasError && {
          borderColor: appTheme.colors.error.primary,
        },
      ]}
    >
      <RNPickerSelect
        placeholder={{ label: placeholder, value: '' }}
        items={options}
        onValueChange={onSelectValue}
        value={value}
      />
    </View>
  );
};
