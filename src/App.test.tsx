import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import App from './App';
import { server } from './mocks/server';
import { transactions } from './mocks/fixtures';

it('renders loading then the complete success state', async () => {
  render(<App />);
  expect(screen.getByText('Loading user…')).toBeInTheDocument();
  expect(await screen.findByText('Jordan Taylor')).toBeInTheDocument();
  expect(await screen.findByText(/Coffee House/)).toBeInTheDocument();
});

it('keeps transactions useful when the user request fails', async () => {
  server.use(http.get('/api/user', () => HttpResponse.json({ message: 'No user' }, { status: 500 })));
  render(<App />);
  expect(await screen.findByRole('button', { name: 'Retry user' })).toBeInTheDocument();
  expect(await screen.findByText(/Coffee House/)).toBeInTheDocument();
});

it('keeps the user visible when transactions fail', async () => {
  server.use(http.get('/api/transactions', () => HttpResponse.json({ message: 'No transactions' }, { status: 500 })));
  render(<App />);
  expect(await screen.findByText('Jordan Taylor')).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: 'Retry transactions' })).toBeInTheDocument();
});

it('renders a valid empty transaction state', async () => {
  server.use(http.get('/api/transactions', () => HttpResponse.json([])));
  render(<App />);
  expect(await screen.findByText('No recent transactions.')).toBeInTheDocument();
});

it('recovers from an error through contextual Retry', async () => {
  let attempt = 0;
  server.use(http.get('/api/transactions', () => { attempt += 1; return attempt === 1 ? HttpResponse.json({ message: 'Temporary' }, { status: 500 }) : HttpResponse.json(transactions); }));
  const user = userEvent.setup();
  render(<App />);
  await user.click(await screen.findByRole('button', { name: 'Retry transactions' }));
  expect(await screen.findByText(/Coffee House/)).toBeInTheDocument();
  expect(attempt).toBe(2);
});

it('rejects an invalid amount at runtime', async () => {
  server.use(http.get('/api/transactions', () => HttpResponse.json([{ ...transactions[0], amount: 'broken' }])));
  render(<App />);
  expect(await screen.findByText(/Invalid transaction amount/)).toBeInTheDocument();
});

it('uses the expected solution heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Current User and Transactions' })).toBeInTheDocument();
});
