/**
 * Format a number with a maximum number of significant digits.
 *
 * @param value The number to format.
 * @param maximumSignificantDigits The maximum number of significant digits.
 * @returns The formatted number.
 */
export const formatWithMaximumSignificantDigits = (
  value: number,
  maximumSignificantDigits: number
): string => {
  return value.toFixed(maximumSignificantDigits).replace(/\.?0+$/, '');
};
