# Failure Scenarios — Current User and Transactions

Set a browser scenario with `?mockScenario=<name>` or `VITE_MOCK_SCENARIO`. Tests should prefer `server.use(...)`.

- `success`: deterministic success behaviour.
- `slow-user`: deterministic slow user behaviour.
- `slow-transactions`: deterministic slow transactions behaviour.
- `user-500`: deterministic user 500 behaviour.
- `transactions-500`: deterministic transactions 500 behaviour.
- `empty-transactions`: deterministic empty transactions behaviour.
- `invalid-amount`: deterministic invalid amount behaviour.
- `malformed-payload`: deterministic malformed payload behaviour.
- `network-error`: deterministic network error behaviour.
- `partial-failure`: deterministic partial failure behaviour.

No handler uses random values, a live clock, a database, a public API, or a real token. Unhandled requests fail tests.
