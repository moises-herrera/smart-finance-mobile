import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { Divider } from "src/components/ui";
import { Stock } from "src/interfaces";
import { globalStyles } from "src/styles";
import { StockListItem } from "../stock-list-item";
import { styles } from "./styles";

interface StocksListProps {
  title: string;
  stocks: Stock[];
}

export const StocksList: FC<StocksListProps> = ({ title, stocks }) => {
  return (
    <View style={styles.listContainer}>
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

      <View style={styles.list}>
        <FlatList
          data={stocks}
          keyExtractor={({ symbol }) => symbol}
          renderItem={({ item }) => (
            <>
              <StockListItem {...item} />
              <Divider marginVertical={10} />
            </>
          )}
        />
      </View>
    </View>
  );
};
