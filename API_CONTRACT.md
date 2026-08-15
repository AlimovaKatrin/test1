# API Contract — Current User and Transactions

All requests are local MSW requests and require `x-access-token: interview-test-token`. No real backend or credential is used.

## Success DTOs

`GET /api/user` returns `{ id, firstName, lastName, currency }`.

`GET /api/transactions` returns `Array<{ id, description, amount: string, currency, createdDate: number, state: 'COMPLETED' | 'PENDING' | 'FAILED' }>`. Transactions are already sorted by `createdDate` descending.

Only the success behaviour needed for Stage 1 is candidate-facing. Interviewer-only failure modes live on the `interviewer-kit` branch.
