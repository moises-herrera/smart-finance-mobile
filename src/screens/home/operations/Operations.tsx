import { View } from "react-native";
import { OperationsList } from "src/components";
import { operations } from "src/mock";
import { styles } from "./styles";

export const Operations = () => {
  return (
    <View style={styles.container}>
      <OperationsList title="Operaciones" operations={operations} />
    </View>
  );
};
