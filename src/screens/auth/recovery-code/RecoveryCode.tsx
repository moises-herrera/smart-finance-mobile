import { FC, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/interfaces';
import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from 'src/styles';
import { styles as authStyles } from 'src/screens/auth/styles';
import { styles } from './styles';
import { appTheme } from 'src/theme';
import { CodeInputBox } from 'src/components';

interface RecoveryCodeProps
  extends StackScreenProps<AuthStackParamList, 'RecoveryCode'> {}

export const RecoveryCode: FC<RecoveryCodeProps> = ({ navigation }) => {
  const [code, setCode] = useState<{
    code1: string;
    code2: string;
    code3: string;
    code4: string;
  }>({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
  });

  const onChangeCode = (id: string, value: string) => {
    setCode((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const isCodeSubmitted = !Object.values(code).some((value) => !value.trim());

    if (isCodeSubmitted) {
      navigation.navigate('ResetPassword');
    }
  }, [code]);
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
        <CodeInputBox id="code1" value={code.code1} onChange={onChangeCode} />
        <CodeInputBox id="code2" value={code.code2} onChange={onChangeCode} />
        <CodeInputBox id="code3" value={code.code3} onChange={onChangeCode} />
        <CodeInputBox id="code4" value={code.code4} onChange={onChangeCode} />
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
