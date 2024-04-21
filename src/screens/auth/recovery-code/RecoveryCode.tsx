import { FC, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { styles as authStyles } from 'src/screens/auth/styles';
import { styles } from './styles';
import { appTheme } from 'src/theme';
import { Input } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { verifyOTP } from 'src/redux/otp';
import { displayToast } from 'src/redux/ui';

interface RecoveryCodeProps
  extends StackScreenProps<AuthStackParamList, 'RecoveryCode'> {}

export const RecoveryCode: FC<RecoveryCodeProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const otpState = useAppSelector(({ otp }) => otp);
  const [code, setCode] = useState<string>('');

  const onChangeCode = (_: string, value: string) => {
    setCode(value);
  };

  useEffect(() => {
    const isCodeSubmitted = code.length === 6;

    if (isCodeSubmitted) {
      const verificationData = {
        email: otpState.email,
        otp: code,
        verificationKey: otpState.verificationKey,
      };

      dispatch(verifyOTP(verificationData))
        .unwrap()
        .then(() => {
          navigation.navigate('ResetPassword');
        });
    }
  }, [code]);

  useEffect(() => {
    if (otpState.errorMessage) {
      dispatch(displayToast({ message: otpState.errorMessage, type: 'error' }));
    }
  }, [otpState.errorMessage]);

  return (
    <ScrollView
      contentContainerStyle={[
        globalStyles.container,
        {
          paddingTop: 150,
          justifyContent: 'flex-start',
          paddingHorizontal: 35,
        },
      ]}
    >
      <View style={authStyles.header}>
        <Text style={globalStyles.title}>Recuperar contraseña</Text>
        <Text style={globalStyles.subTitle}>
          Ingresa el código de verificación enviado a tu correo
        </Text>
      </View>

      <View style={styles.codeContainer}>
        <Input
          id="code"
          type="number-pad"
          value={code}
          onChange={onChangeCode}
        />
      </View>

      <Text
        style={[
          globalStyles.subTitle,
          { color: appTheme.colors.blue, textAlign: 'center' },
        ]}
      >
        Reenviar código
      </Text>
    </ScrollView>
  );
};
