import { FC, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Input } from 'src/components/ui/input';
import { MaterialIcons } from '@expo/vector-icons';
import { appTheme } from 'src/theme';
import { styles } from './styles';

interface PasswordInputProps {
  id: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  onChangeVisibilityEntry?: (isVisibleEntry: boolean) => void;
  hasError: boolean;
}

export const PasswordInput: FC<PasswordInputProps> = ({
  id,
  value,
  onChange,
  onBlur,
  onChangeVisibilityEntry: onChangeVisibility,
  hasError,
}) => {
  const [isVisibleEntry, setIsVisibleEntry] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisibleEntry((isVisible) => !isVisible);
    onChangeVisibility && onChangeVisibility(!isVisibleEntry);
  };

  return (
    <View style={{ position: 'relative' }}>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        secureTextEntry={!isVisibleEntry}
        hasError={hasError}
      />
      <Pressable onPress={toggleVisibility} style={styles.eyeIcon}>
        <MaterialIcons
          name="remove-red-eye"
          size={24}
          color={appTheme.colors.darkGray}
        />
      </Pressable>
    </View>
  );
};
