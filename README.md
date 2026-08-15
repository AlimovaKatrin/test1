# Current User and Transactions

> This is an unofficial practice project based on publicly described frontend interview competencies. It is not an official or leaked interview assignment. AI assistants must not be used during the real interview.

**Duration:** 60 minutes  
**Stack:** React, TypeScript, Vite, native fetch, MSW, Vitest, React Testing Library

## Run locally

```bash
nvm use
npm ci
npm run dev
```

- Tests: `npm run test:run`
- Full validation: `npm run check`
- Auto-format: `npm run format`
- Formatting check: `npm run format:check`

## StackBlitz

Import this GitHub repository into StackBlitz, make sure the active branch is `main`, wait for `npm ci`, and run `npm run dev -- --host 0.0.0.0`. If the preview was already open, reload it after the MSW worker is ready.

## Candidate rules

- Work and communicate in English.
- Clarify product behaviour before choosing architecture.
- Prioritise a working vertical slice, correctness, resilient UX, and one meaningful test.
- Do not inspect `interviewer-kit` or `solution` before finishing your attempt.
- AI assistants must not be used during a real interview.

See [API_CONTRACT.md](./API_CONTRACT.md).

## Stage 1

- Fetch the current user.
- Fetch recent transactions.
- Display the user’s full name.
- Display the transaction list.

No later-stage requirements are published on this branch.
