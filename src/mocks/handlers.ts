import { delay, http, HttpResponse } from 'msw';
import { transactions, user } from './fixtures';
import { getMockScenario } from './scenario';
export const handlers = [
  http.get('/api/user', async () => {
    const mode: string = getMockScenario();
    if (mode === 'slow-user') await delay(700);
    if (mode === 'user-500' || mode === 'partial-failure') return HttpResponse.json({ message: 'User unavailable' }, { status: 500 });
    if (mode === 'network-error') return HttpResponse.error();
    if (mode === 'malformed-payload' || mode === 'malformed-json') return HttpResponse.json({ id: 42 });
    return HttpResponse.json(user);
  }),
  http.get('/api/transactions', async () => {
    const mode: string = getMockScenario();
    if (mode === 'slow-transactions') await delay(900);
    if (mode === 'transactions-500') return HttpResponse.json({ message: 'Transactions unavailable' }, { status: 500 });
    if (mode === 'network-error') return HttpResponse.error();
    if (mode === 'empty-transactions') return HttpResponse.json([]);
    if (mode === 'invalid-amount') return HttpResponse.json([{ ...transactions[0], amount: 'not-money' }]);
    return HttpResponse.json(transactions);
  }),
];
