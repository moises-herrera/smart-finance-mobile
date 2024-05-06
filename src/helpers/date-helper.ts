/**
 * Get the formatted date.
 *
 * @param date The date to format.
 * @returns The formatted date.
 */
export const getDateFormatted = (date: string | Date): string => {
  return new Date(date).toLocaleDateString();
};
