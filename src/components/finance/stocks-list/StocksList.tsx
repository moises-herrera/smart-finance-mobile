import { FC, useState } from 'react';
import { FlatList, Text, View, Pressable } from 'react-native';
import { Divider } from 'src/components/ui';
import { StockInfoItem } from 'src/interfaces';
import { globalStyles } from 'src/styles';
import { StockListItem } from 'src/components/finance/stock-list-item';
import { StockDialog } from 'src/components/finance/stock-dialog';
import { styles } from './styles';
import { OperationInfo } from 'src/interfaces';
import { useAppDispatch } from 'src/hooks';
import { getAcquiredStocks } from 'src/redux/acquired-stock';
import { EmptyStockList } from 'src/components/finance/empty-stock-list';

interface StocksListProps {
  title: string;
  stocks: StockInfoItem[];
  isBuy?: boolean;
}

export const StocksList: FC<StocksListProps> = ({
  title,
  stocks,
  isBuy = true,
}) => {
  const dispatch = useAppDispatch();
  const [operationInfo, setOperationInfo] = useState<OperationInfo>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onStockPress = (stock: StockInfoItem): void => {
    setIsDialogOpen(true);
    const operationInfo: OperationInfo = {
      stockId: stock._id,
      label: stock.label,
      symbol: stock.symbol,
      icon: stock.icon,
      price: stock.amount,
      isBuy,
      currency: stock.conversionCurrency || stock.currency,
    };
    setOperationInfo(operationInfo);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
    dispatch(getAcquiredStocks());
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
        {stocks.length ? (
          <FlatList
            data={stocks}
            keyExtractor={({ symbol }) => symbol}
            renderItem={({ item }) => (
              <Pressable onPress={() => onStockPress(item)}>
                <StockListItem {...item} />
                {stocks[stocks.length - 1].symbol !== item.symbol && (
                  <Divider marginVertical={10} />
                )}
              </Pressable>
            )}
          />
        ) : (
          <EmptyStockList
            message="Aquí se mostrarán las acciones que adquieras en el mercado"
            buttonLabel="¡Empieza a invertir!"
          />
        )}
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
