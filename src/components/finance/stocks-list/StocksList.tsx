import { FC, useState } from 'react';
import { FlatList, Text, View, Pressable } from 'react-native';
import { Divider } from 'src/components/ui';
import { Stock } from 'src/interfaces';
import { globalStyles } from 'src/styles';
import { StockListItem } from '../stock-list-item';
import { StockDialog } from '../stock-dialog';
import { styles } from './styles';
import { OperationInfo } from 'src/interfaces';

interface StocksListProps {
  title: string;
  stocks: Stock[];
}

export const StocksList: FC<StocksListProps> = ({ title, stocks }) => {
  const [operationInfo, setOperationInfo] = useState<OperationInfo>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onStockPress = (stock: Stock): void => {
    setIsDialogOpen(true);
    setOperationInfo({
      label: stock.label,
      symbol: stock.symbol,
      amount: stock.price,
      isBuy: true,
    });
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <View style={styles.listContainer}>
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

      <View style={styles.list}>
        <FlatList
          data={stocks}
          keyExtractor={({ symbol }) => symbol}
          renderItem={({ item }) => (
            <Pressable onPress={() => onStockPress(item)}>
              <StockListItem {...item} />
              <Divider marginVertical={10} />
            </Pressable>
          )}
        />
      </View>

      {operationInfo && (
        <StockDialog
          isOpen={isDialogOpen}
          onClose={onCloseDialog}
          operationInfo={operationInfo}
        />
      )}
    </View>
  );
};
