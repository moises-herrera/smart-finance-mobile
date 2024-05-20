/**
 * Format a number to currency.
 *
 * @param value The number to format.
 * @returns The formatted currency.
 */
export const formatCurrency = (value: number, currencyCode: string): string => {
  return value.toLocaleString('es-CO', {
    style: 'currency',
    currency: currencyCode,
  });
};
