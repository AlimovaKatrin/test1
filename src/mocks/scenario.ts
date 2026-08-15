export type MockScenario =
  | 'success'
  | 'slow-user'
  | 'slow-transactions'
  | 'user-500'
  | 'transactions-500'
  | 'empty-transactions'
  | 'invalid-amount'
  | 'malformed-payload'
  | 'network-error'
  | 'partial-failure';

const fallback: MockScenario = 'success';

export function getMockScenario(): MockScenario {
  const fromUrl =
    typeof window === 'undefined'
      ? null
      : new URLSearchParams(window.location.search).get('mockScenario');
  const candidate = fromUrl ?? import.meta.env.VITE_MOCK_SCENARIO;
  return (
    [
      'success',
      'slow-user',
      'slow-transactions',
      'user-500',
      'transactions-500',
      'empty-transactions',
      'invalid-amount',
      'malformed-payload',
      'network-error',
      'partial-failure',
    ] as string[]
  ).includes(candidate ?? '')
    ? (candidate as MockScenario)
    : fallback;
}
