import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from 'src/styles';

interface FormControlProps {
  label: string;
  children: React.ReactNode;
  fieldError?: string;
  style?: View['props']['style'];
}

export const FormControl: FC<FormControlProps> = ({
  label,
  children,
  fieldError = '',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {children}
      {fieldError && <Text style={globalStyles.errorText}>{fieldError}</Text>}
    </View>
  );
};
