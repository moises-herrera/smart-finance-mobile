/**
 * Format a number to currency.
 *
 * @param value The number to format.
 * @returns The formatted currency.
 */
export const formatCurrency = (value: number, currencyCode: string): string => {
  return `${currencyCode} ${value
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};
