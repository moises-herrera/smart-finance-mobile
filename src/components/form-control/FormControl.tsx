import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { globalStyles } from '../../styles';

interface FormControlProps {
  label: string;
  children: React.ReactNode;
  fieldError?: string;
}

export const FormControl: FC<FormControlProps> = ({
  label,
  children,
  fieldError = '',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {fieldError && <Text style={globalStyles.errorText}>{fieldError}</Text>}
    </View>
  );
};
