import { SelectOption } from 'src/interfaces';
import { OperationType } from 'src/interfaces/enums';

export const operationTypes: SelectOption[] = [
  {
    value: OperationType.Purchase,
    label: 'Compra',
  },
  {
    value: OperationType.Sale,
    label: 'Venta',
  },
];
