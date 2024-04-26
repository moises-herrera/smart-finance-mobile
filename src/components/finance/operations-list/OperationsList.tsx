import { FC, useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { StockListItem } from 'src/components/finance/stock-list-item';
import { Divider, Select } from 'src/components/ui';
import { Operation, OperationType } from 'src/interfaces';
import { operationTypes } from 'src/mock';
import { globalStyles } from 'src/styles';
import { styles } from './styles';

interface OperationsListProps {
  title: string;
  operations: Operation[];
}

export const OperationsList: FC<OperationsListProps> = ({
  title,
  operations,
}) => {
  const [operationTypeSelected, setOperationTypeSelected] =
    useState<OperationType>(OperationType.Purchase);
  const operationsSelectedList = useMemo(() => {
    return operations.filter(({ type }) => type === operationTypeSelected);
  }, [operationTypeSelected]);

  const onSelectType = (value: OperationType) => {
    setOperationTypeSelected(value);
  };

  return (
    <View style={styles.listContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={[
            globalStyles.title,
            {
              fontSize: 18,
              textAlign: 'left',
            },
          ]}
        >
          {title}
        </Text>

        <Select
          id="type"
          options={operationTypes}
          value={OperationType.Purchase}
          onChange={(_, value) => onSelectType(value as OperationType)}
          style={{
            width: 150,
          }}
        />
      </View>

      <View style={styles.list}>
        <FlatList
          data={operationsSelectedList}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item: { quantity, stock, createdAt } }) => (
            <>
              <StockListItem
                {...{
                  ...stock,
                  price: quantity,
                }}
              />
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
