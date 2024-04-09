import { View } from 'react-native';
import { styles } from './styles';
import { FC } from 'react';

interface DividerProps {
  marginVertical?: number;
}

export const Divider: FC<DividerProps> = ({ marginVertical = 28 }) => {
  return (
    <View
      style={{
        ...styles.divider,
        marginVertical,
      }}
    />
  );
};
