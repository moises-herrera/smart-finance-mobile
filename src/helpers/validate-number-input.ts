/** Pattern to validate inputs with numerical values. */
export const numberPattern = /[^0-9.]/g;

/**
 * Validate a number input.
 *
 * @param value The value to validate.
 * @returns The value without invalid characters.
 */
export const validateNumberInput = (value: string): string => {
  return value.replace(numberPattern, '');
};
