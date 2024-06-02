import { FC, useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { StockListItem } from 'src/components/finance/stock-list-item';
import { Divider, Select } from 'src/components/ui';
import { Operation, OperationType } from 'src/interfaces';
import { operationTypes } from 'src/mock';
import { globalStyles } from 'src/styles';
import { styles } from './styles';
import { getDateFormatted } from 'src/helpers';
import { EmptyStockList } from 'src/components/finance/empty-stock-list';

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
        {operationsSelectedList.length ? (
          <FlatList
            data={operationsSelectedList}
            keyExtractor={({ _id }) => _id}
            renderItem={({
              item: { _id, quantity, moneyAmount, stock, currency, createdAt },
            }) => (
              <>
                <StockListItem
                  {...{
                    ...stock,
                    quantity,
                    amount: moneyAmount,
                    currency,
                  }}
                />
                <Text style={styles.dateLabel}>
                  {getDateFormatted(createdAt)}
                </Text>
                {operationsSelectedList[operationsSelectedList.length - 1]
                  ._id !== _id && <Divider marginVertical={10} />}
              </>
            )}
          />
        ) : (
          <EmptyStockList
            message="Aquí se mostrará el historial de operaciones que realices en el mercado"
            buttonLabel="Ir al mercado"
            containerHeight="94.5%"
          />
        )}
      </View>
    </View>
  );
};
