# Theory Questions — Current User and Transactions

Select questions after the practical section and adapt follow-ups to the candidate’s code.

## Q01 — JavaScript (medium)

Explain what happens after an await, including Promises, the Event Loop, microtasks, and tasks.

**Connection to practical:** Reason about request completion and rendering order.

## Q02 — JavaScript (medium)

How do arrays, objects, Map, and Set differ, and how do you update collections immutably?

**Connection to practical:** Update and deduplicate visible collections safely.

## Q03 — JavaScript (medium)

What is a closure, and how can a stale closure affect an async React callback?

**Connection to practical:** Prevent old requests or timers from applying obsolete values.

## Q04 — TypeScript (medium)

Why should external JSON begin as unknown? Compare narrowing, runtime validation, and an unsafe type assertion.

**Connection to practical:** Protect the API boundary from malformed payloads.

## Q05 — TypeScript (medium)

Compare a DTO and a domain model. Include discriminated unions, never, optional, and nullable fields.

**Connection to practical:** Model request and business states honestly.

## Q06 — React (medium)

Describe trigger, render, reconciliation, and commit. What changes in Strict Mode?

**Connection to practical:** Explain repeated development requests and safe effects.

## Q07 — React (medium)

Explain state as a snapshot, batching, and functional updates.

**Connection to practical:** Implement counters, retries, and request transitions correctly.

## Q08 — React (medium)

How do keys affect identity, and when do composition or error boundaries matter?

**Connection to practical:** Render changing lists without state leakage.

## Q09 — React (medium)

How should effect dependencies and cleanup be reasoned about?

**Connection to practical:** Synchronize parameterised requests without races.

## Q10 — React (medium)

Compare useRef and useState, controlled inputs, and derived state.

**Connection to practical:** Build accessible forms and filters.

## Q11 — React (medium)

How do local, shared, global, and server state differ?

**Connection to practical:** Choose proportional state ownership for a one-page exercise.

## Q12 — Networking (medium)

Why must fetch callers inspect response.ok? Distinguish HTTP and network errors and explain 204 handling.

**Connection to practical:** Prevent permanent loading and JSON parse failures.

## Q13 — Networking (hard)

How do cancellation, request IDs, and ignore flags prevent race conditions?

**Connection to practical:** Protect parameterised and debounced requests.

## Q14 — Networking (medium)

When should requests be parallel or sequential? Compare Promise.all and Promise.allSettled under partial failure.

**Connection to practical:** Load multiple dashboard sections resiliently.

## Q15 — Networking (hard)

Design Retry and a request-state model, including stale data and duplicate actions.

**Connection to practical:** Create recoverable, honest UX.

## Q16 — Testing (medium)

When should you use getBy, queryBy, findBy, and waitFor?

**Connection to practical:** Test loading and asynchronous completion.

## Q17 — Testing (medium)

Why use userEvent and MSW in a React integration test?

**Connection to practical:** Verify UI and network behaviour together.

## Q18 — Testing (medium)

Compare unit, integration, and E2E tests and explain deterministic fixtures.

**Connection to practical:** Select useful interview-sized coverage.

## Q19 — Testing (hard)

How would you test loading, error, empty, Retry, and stale-response behaviour?

**Connection to practical:** Cover the highest-risk request transition.

## Q20 — Scenario (medium)

What is the highest-risk correctness boundary in Current User and Transactions?

**Connection to practical:** Prioritise the practical exercise.

## Q21 — Scenario (hard)

How would you prevent the most important invalid or stale state in Current User and Transactions?

**Connection to practical:** Defend the solution’s state model.

## Q22 — Scenario (medium)

Which single behavioural test gives the most confidence for Current User and Transactions, and why?

**Connection to practical:** Connect testing effort to product risk.
