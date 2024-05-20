import { AcquiredStock, Stock } from 'src/interfaces';

/**
 * Parse the acquired stocks to a list of stocks.
 *
 * @param acquiredStocks The acquired stocks to parse.
 * @returns The list of stocks.
 */
export const parseAcquiredStocks = (
  acquiredStocks: AcquiredStock[]
): Stock[] => {
  return acquiredStocks.map(({ stock, totalQuantity, currency }) => ({
    ...stock,
    price: totalQuantity,
    currency,
  }));
};
