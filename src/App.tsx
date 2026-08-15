import { useCallback, useEffect, useState } from 'react';
import { checkedResponse, readJson } from './api/client';
import { toError } from './api/errors';
import type { RequestState } from './domain/request-state';

type UserDto = { id: string; firstName: string; lastName: string; currency: string };
type TransactionDto = { id: string; description: string; amount: string; currency: string; createdDate: number; state: 'COMPLETED' | 'PENDING' | 'FAILED' };
type User = { id: string; fullName: string; currency: string };
type Transaction = Omit<TransactionDto, 'amount'> & { amount: number };

function isRecord(value: unknown): value is Record<string, unknown> { return typeof value === 'object' && value !== null; }

function mapUser(value: unknown): User {
  if (!isRecord(value) || typeof value.id !== 'string' || typeof value.firstName !== 'string' || typeof value.lastName !== 'string' || typeof value.currency !== 'string') throw new Error('Invalid user data');
  const dto: UserDto = { id: value.id, firstName: value.firstName, lastName: value.lastName, currency: value.currency };
  return { id: dto.id, fullName: `${dto.firstName} ${dto.lastName}`, currency: dto.currency };
}

function mapTransactions(value: unknown): Transaction[] {
  if (!Array.isArray(value)) throw new Error('Invalid transactions data');
  return value.map((item) => {
    if (!isRecord(item) || typeof item.id !== 'string' || typeof item.description !== 'string' || typeof item.amount !== 'string' || typeof item.currency !== 'string' || typeof item.createdDate !== 'number' || !['COMPLETED', 'PENDING', 'FAILED'].includes(String(item.state))) throw new Error('Invalid transactions data');
    const amount = Number(item.amount);
    if (!Number.isFinite(amount)) throw new Error('Invalid transaction amount');
    const dto: TransactionDto = { id: item.id, description: item.description, amount: item.amount, currency: item.currency, createdDate: item.createdDate, state: item.state as TransactionDto['state'] };
    return { ...dto, amount };
  });
}

const money = (value: number, currency: string) => new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(value);
const date = (value: number) => new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date(value));

function App() {
  const [user, setUser] = useState<RequestState<User>>({ status: 'idle' });
  const [transactions, setTransactions] = useState<RequestState<Transaction[]>>({ status: 'idle' });

  const loadUser = useCallback(async () => {
    setUser({ status: 'loading' });
    try { const response = await checkedResponse('/api/user'); setUser({ status: 'success', data: mapUser(await readJson(response)) }); }
    catch (error: unknown) { setUser({ status: 'error', error: toError(error) }); }
  }, []);

  const loadTransactions = useCallback(async () => {
    setTransactions({ status: 'loading' });
    try { const response = await checkedResponse('/api/transactions'); setTransactions({ status: 'success', data: mapTransactions(await readJson(response)) }); }
    catch (error: unknown) { setTransactions({ status: 'error', error: toError(error) }); }
  }, []);

  useEffect(() => { void loadUser(); void loadTransactions(); }, [loadTransactions, loadUser]);

  return <main><p className="eyebrow">Reference solution</p><h1>Current User and Transactions</h1><div className="grid">
    <section className="card" aria-labelledby="user-heading"><h2 id="user-heading">Current user</h2>
      {user.status === 'loading' || user.status === 'idle' ? <p role="status">Loading user…</p> : null}
      {user.status === 'error' ? <div role="alert"><p className="error">Could not load user: {user.error.message}</p><button onClick={() => void loadUser()}>Retry user</button></div> : null}
      {user.status === 'success' ? <p><strong>{user.data.fullName}</strong><br /><span className="muted">Primary currency: {user.data.currency}</span></p> : null}
    </section>
    <section className="card" aria-labelledby="transactions-heading"><h2 id="transactions-heading">Recent transactions</h2>
      {transactions.status === 'loading' || transactions.status === 'idle' ? <p role="status">Loading transactions…</p> : null}
      {transactions.status === 'error' ? <div role="alert"><p className="error">Could not load transactions: {transactions.error.message}</p><button onClick={() => void loadTransactions()}>Retry transactions</button></div> : null}
      {transactions.status === 'success' && transactions.data.length === 0 ? <p>No recent transactions.</p> : null}
      {transactions.status === 'success' && transactions.data.length > 0 ? <ul>{transactions.data.map((transaction) => <li key={transaction.id}><strong>{transaction.description}</strong> — {money(transaction.amount, transaction.currency)} <span className="muted">{date(transaction.createdDate)} · {transaction.state}</span></li>)}</ul> : null}
    </section>
  </div></main>;
}

export default App;
