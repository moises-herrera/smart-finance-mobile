import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DimensionValue, Text, View } from 'react-native';
import { Button } from 'src/components/ui';
import { globalStyles } from 'src/styles';
import { appTheme } from 'src/theme';
import { styles } from './styles';

interface EmptyStockListProps {
  message: string;
  buttonLabel: string;
  containerHeight?: DimensionValue;
}

export const EmptyStockList: FC<EmptyStockListProps> = ({
  message,
  buttonLabel,
  containerHeight,
}) => {
  const navigation = useNavigation();

  const redirectToMarket = (): void => {
    navigation.navigate('Home', {
      screen: 'Market',
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          height: containerHeight ?? '74%',
        },
      ]}
    >
      <Text
        style={[
          globalStyles.textBase,
          {
            textAlign: 'center',
            fontSize: 14,
          },
        ]}
      >
        {message}
      </Text>

      <Button
        style={{
          button: {
            backgroundColor: appTheme.colors.white,
            borderWidth: 0.5,
            borderRadius: 6,
            borderColor: appTheme.colors.blue,
          },
          buttonText: {
            color: appTheme.colors.blue,
          },
        }}
        label={buttonLabel}
        onPress={redirectToMarket}
      />
    </View>
  );
};
