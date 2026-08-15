export type UserDto = { id: string; firstName: string; lastName: string; currency: string };
export type TransactionDto = {
  id: string;
  description: string;
  amount: string;
  currency: string;
  createdDate: number;
  state: 'COMPLETED' | 'PENDING' | 'FAILED';
};
export const user: UserDto = {
  id: 'user-1',
  firstName: 'Jordan',
  lastName: 'Taylor',
  currency: 'GBP',
};
export const transactions: TransactionDto[] = [
  {
    id: 'tx-1',
    description: 'Coffee House',
    amount: '4.80',
    currency: 'GBP',
    createdDate: 1760000000000,
    state: 'COMPLETED',
  },
  {
    id: 'tx-2',
    description: 'Train ticket',
    amount: '24.20',
    currency: 'GBP',
    createdDate: 1759913600000,
    state: 'PENDING',
  },
  {
    id: 'tx-3',
    description: 'Book store',
    amount: '18.99',
    currency: 'EUR',
    createdDate: 1759827200000,
    state: 'FAILED',
  },
];
