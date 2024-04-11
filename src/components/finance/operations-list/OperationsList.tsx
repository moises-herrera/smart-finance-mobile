import { FC, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { StockListItem } from "src/components/finance/stock-list-item/StockListItem";
import { Divider, Select } from "src/components/ui";
import { Operation } from "src/interfaces";
import { operationType } from "src/mock";
import { globalStyles } from "src/styles";
import { styles } from "./styles";

interface OperationsListProps {
  title: string;
  operations: Operation[];
}

export const OperationsList: FC<OperationsListProps> = ({
  title,
  operations,
}) => {
  const [operationTypeSelected, setOperationTypeSelected] = useState<string>(
    operationType[0].value
  );
  const operationsSelectedList = useMemo(() => {
    return operations.filter(({ typeId }) => typeId === operationTypeSelected);
  }, [operationTypeSelected]);

  const onSelectType = (value: string) => {
    setOperationTypeSelected(value);
  };

  return (
    <View style={styles.listContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            globalStyles.title,
            {
              fontSize: 18,
              textAlign: "left",
            },
          ]}
        >
          {title}
        </Text>

        <Select
          id="type"
          options={operationType}
          value={operationType[0].value}
          onChange={(_, value) => onSelectType(value)}
          style={{
            width: 150,
          }}
        />
      </View>

      <View style={styles.list}>
        <FlatList
          data={operationsSelectedList}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { stock, createdAt } }) => (
            <>
              <StockListItem {...stock} />
              <Text style={styles.dateLabel}>
                {new Date(createdAt).toLocaleDateString()}
              </Text>
              <Divider marginVertical={10} />
            </>
          )}
        />
      </View>
    </View>
  );
};
