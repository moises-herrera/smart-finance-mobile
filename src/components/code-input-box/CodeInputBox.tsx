import { FC } from 'react';
import { styles } from './styles';
import { Input, InputProps } from 'src/components';

interface CodeInputBoxProps extends InputProps {}

export const CodeInputBox: FC<CodeInputBoxProps> = (props) => {
  return <Input type="numeric" {...props} style={styles.codeBox} />;
};
