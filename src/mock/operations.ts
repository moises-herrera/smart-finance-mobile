import { Operation } from 'src/interfaces';
import { stocks } from './stocks';

export const operations: Operation[] = [
  {
    id: '100',
    currencyId: '1',
    quantity: 10,
    typeId: 'operation-type-1',
    brokerId: '001',
    stock: stocks[0],
    createdAt: new Date('2024-04-09').toDateString(),
  },
  {
    id: '200',
    currencyId: '1',
    quantity: 100,
    typeId: 'operation-type-1',
    brokerId: '001',
    stock: stocks[2],
    createdAt: new Date('2024-04-11').toDateString(),
  },
  {
    id: '300',
    currencyId: '1',
    quantity: 50,
    typeId: 'operation-type-1',
    brokerId: '002',
    stock: stocks[1],
    createdAt: new Date('2024-04-10').toDateString(),
  },
  {
    id: '400',
    currencyId: '0',
    quantity: 30,
    typeId: 'operation-type-2',
    brokerId: '001',
    stock: stocks[4],
    createdAt: new Date('2024-04-06').toDateString(),
  },
  {
    id: '500',
    currencyId: '0',
    quantity: 50,
    typeId: 'operation-type-2',
    brokerId: '002',
    stock: stocks[5],
    createdAt: new Date('2024-03-20').toDateString(),
  },
  {
    id: '600',
    currencyId: '0',
    quantity: 20,
    typeId: 'operation-type-2',
    brokerId: '002',
    stock: stocks[6],
    createdAt: new Date('2024-03-12').toDateString(),
  },
];
