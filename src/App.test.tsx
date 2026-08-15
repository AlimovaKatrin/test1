import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the candidate starter', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: 'Current User and Transactions' }),
  ).toBeInTheDocument();
});

it.todo('replace with one meaningful behavioural test during the interview');
