import { styles } from './styles';
import { Input, InputProps } from '../input';
import { FC } from 'react';

interface CodeInputBoxProps extends InputProps {}

export const CodeInputBox: FC<CodeInputBoxProps> = (props) => {
  return <Input type="numeric" {...props} style={styles.codeBox} />;
};
