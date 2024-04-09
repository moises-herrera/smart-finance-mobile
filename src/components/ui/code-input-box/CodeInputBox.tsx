import { FC } from 'react';
import { styles } from './styles';
import { Input, InputProps } from 'src/components/ui/input';

interface CodeInputBoxProps extends InputProps {}

export const CodeInputBox: FC<CodeInputBoxProps> = (props) => {
  return <Input type="numeric" {...props} style={styles.codeBox} />;
};
