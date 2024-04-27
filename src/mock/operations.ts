import { Broker, Operation, OperationType } from 'src/interfaces';
import { stocks } from './stocks';
import { brokers } from './brokers';

export const operations: Operation[] = [
  {
    _id: '100',
    quantity: 10,
    type: OperationType.Purchase,
    broker: brokers[0] as Broker,
    stock: stocks[0],
    createdAt: new Date('2024-04-09').toDateString(),
  },
  {
    _id: '200',
    quantity: 100,
    type: OperationType.Purchase,
    broker: brokers[0] as Broker,
    stock: stocks[2],
    createdAt: new Date('2024-04-11').toDateString(),
  },
  {
    _id: '300',
    quantity: 50,
    type: OperationType.Purchase,
    broker: brokers[0] as Broker,
    stock: stocks[1],
    createdAt: new Date('2024-04-10').toDateString(),
  },
  {
    _id: '400',
    quantity: 30,
    type: OperationType.Sale,
    broker: brokers[0] as Broker,
    stock: stocks[4],
    createdAt: new Date('2024-04-06').toDateString(),
  },
  {
    _id: '500',
    quantity: 50,
    type: OperationType.Sale,
    broker: brokers[0] as Broker,
    stock: stocks[5],
    createdAt: new Date('2024-03-20').toDateString(),
  },
  {
    _id: '600',
    quantity: 20,
    type: OperationType.Sale,
    broker: brokers[0] as Broker,
    stock: stocks[6],
    createdAt: new Date('2024-03-12').toDateString(),
  },
] as Operation[];
