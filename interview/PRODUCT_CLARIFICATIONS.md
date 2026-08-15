# Product Clarifications — Current User and Transactions

- **API location:** all endpoints are local MSW handlers; no real backend is permitted.
- **Authentication:** always use the fake header value `interview-test-token`.
- **Loading:** expose a meaningful status for the affected operation only.
- **Errors:** keep useful unrelated or previous data visible where the scenario allows.
- **Empty:** distinguish a valid empty result from an error.
- **Retry:** retry only the failed operation unless “Refresh Dashboard” is explicitly selected.
- **Accessibility:** every control needs an accessible name; status and alert messages must be queryable.
- **Formatting:** use `Intl` rather than hand-built display strings.
- **Architecture:** no new state library is required.
- **Acceptance evidence:** preview behaviour plus a relevant test or explicit manual scenario confirmation.

Scenario-specific emphasis: response.ok, HTTP versus network failure, DTO mapping, runtime validation, Promise.all/allSettled, partial failure, and accessible asynchronous tests.
