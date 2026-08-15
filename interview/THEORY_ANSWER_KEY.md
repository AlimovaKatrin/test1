# Theory Answer Key — Current User and Transactions

## Q01

**Category:** JavaScript  
**Difficulty:** medium

**Question:** Explain what happens after an await, including Promises, the Event Loop, microtasks, and tasks.

**Minimum acceptable:** await suspends the async function and its continuation runs in a microtask after settlement.

**Strong answer:** Distinguishes call stack, task queue, microtask checkpoint, promise reactions, and why long synchronous work still blocks rendering.

**Common incorrect answer:** await starts a new OS thread.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Reason about request completion and rendering order.

## Q02

**Category:** JavaScript  
**Difficulty:** medium

**Question:** How do arrays, objects, Map, and Set differ, and how do you update collections immutably?

**Minimum acceptable:** Choose by access/uniqueness needs and create new arrays or objects instead of mutating state.

**Strong answer:** Explains identity, insertion order, deduplication, lookup costs, spread/map/filter, and why sort/reverse/splice can mutate.

**Common incorrect answer:** React automatically observes every in-place mutation.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Update and deduplicate visible collections safely.

## Q03

**Category:** JavaScript  
**Difficulty:** medium

**Question:** What is a closure, and how can a stale closure affect an async React callback?

**Minimum acceptable:** A closure captures lexical bindings; a callback can observe values from an older render.

**Strong answer:** Explains render snapshots, functional updates, refs, dependencies, and cancellation/request IDs as distinct remedies.

**Common incorrect answer:** Closures always read the newest state.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Prevent old requests or timers from applying obsolete values.

## Q04

**Category:** TypeScript  
**Difficulty:** medium

**Question:** Why should external JSON begin as unknown? Compare narrowing, runtime validation, and an unsafe type assertion.

**Minimum acceptable:** TypeScript does not validate JSON at runtime; unknown forces checks.

**Strong answer:** Describes structural validation, type guards/schema libraries, error paths, and why as changes compiler belief only.

**Common incorrect answer:** as converts malformed data at runtime.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Protect the API boundary from malformed payloads.

## Q05

**Category:** TypeScript  
**Difficulty:** medium

**Question:** Compare a DTO and a domain model. Include discriminated unions, never, optional, and nullable fields.

**Minimum acceptable:** DTO matches transport JSON; the domain model matches UI needs; unions model valid states.

**Strong answer:** Explains boundary mapping, exhaustive never checks, absence versus explicit null, and preventing impossible states.

**Common incorrect answer:** DTO and domain types must always be identical.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Model request and business states honestly.

## Q06

**Category:** React  
**Difficulty:** medium

**Question:** Describe trigger, render, reconciliation, and commit. What changes in Strict Mode?

**Minimum acceptable:** A state/prop update triggers render; React reconciles; commit mutates the DOM.

**Strong answer:** Separates pure render from effects/commit, explains identity, development-only Strict Mode replays, and why effects need cleanup.

**Common incorrect answer:** React render always means the DOM changed once.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Explain repeated development requests and safe effects.

## Q07

**Category:** React  
**Difficulty:** medium

**Question:** Explain state as a snapshot, batching, and functional updates.

**Minimum acceptable:** Each render sees a snapshot; updates are queued/batched; functional updates derive from prior state.

**Strong answer:** Explains event boundaries, multiple increments, async callbacks, and avoiding derived duplicated state.

**Common incorrect answer:** setState synchronously mutates the current variable.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Implement counters, retries, and request transitions correctly.

## Q08

**Category:** React  
**Difficulty:** medium

**Question:** How do keys affect identity, and when do composition or error boundaries matter?

**Minimum acceptable:** Stable keys preserve item identity; composition keeps responsibilities local; error boundaries catch rendering failures.

**Strong answer:** Explains why index keys fail under reorder, component type/position identity, runtime versus request errors, and proportional decomposition.

**Common incorrect answer:** Keys are only for silencing a warning.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Render changing lists without state leakage.

## Q09

**Category:** React  
**Difficulty:** medium

**Question:** How should effect dependencies and cleanup be reasoned about?

**Minimum acceptable:** List every reactive value used; cleanup runs before a changed effect and on unmount.

**Strong answer:** Separates synchronization from event handling, explains AbortController/ignore flags, Strict Mode, and avoiding data-dependent dependency hacks.

**Common incorrect answer:** An empty dependency array is always the safest choice.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Synchronize parameterised requests without races.

## Q10

**Category:** React  
**Difficulty:** medium

**Question:** Compare useRef and useState, controlled inputs, and derived state.

**Minimum acceptable:** State drives rendering; refs hold mutable non-render data; controlled fields use state; derived values should usually be computed.

**Strong answer:** Covers focus/IDs/controllers, string form state, validation, memoisation only for measured cost, and single source of truth.

**Common incorrect answer:** Every computed list should be copied into state.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Build accessible forms and filters.

## Q11

**Category:** React  
**Difficulty:** medium

**Question:** How do local, shared, global, and server state differ?

**Minimum acceptable:** Keep state at the narrowest useful owner; server state has remote lifecycle and staleness.

**Strong answer:** Discusses lifting, composition, context, URL state, cache keys, invalidation, and when a server-state library helps.

**Common incorrect answer:** All API data belongs in Redux.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Choose proportional state ownership for a one-page exercise.

## Q12

**Category:** Networking  
**Difficulty:** medium

**Question:** Why must fetch callers inspect response.ok? Distinguish HTTP and network errors and explain 204 handling.

**Minimum acceptable:** fetch normally resolves for HTTP 4xx/5xx; network failures reject; 204 has no JSON body.

**Strong answer:** Adds structured HttpError, contextual messages, safe body parsing, cancellation distinction, and response contract checks.

**Common incorrect answer:** fetch rejects every 500 response.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Prevent permanent loading and JSON parse failures.

## Q13

**Category:** Networking  
**Difficulty:** hard

**Question:** How do cancellation, request IDs, and ignore flags prevent race conditions?

**Minimum acceptable:** They prevent an older result from updating current UI; AbortController can also cancel supported work.

**Strong answer:** Explains cleanup timing, AbortError handling, server work caveats, sequence tokens, and when each approach is appropriate.

**Common incorrect answer:** Debounce alone guarantees no stale response.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Protect parameterised and debounced requests.

## Q14

**Category:** Networking  
**Difficulty:** medium

**Question:** When should requests be parallel or sequential? Compare Promise.all and Promise.allSettled under partial failure.

**Minimum acceptable:** Independent requests can start together; all fails fast; allSettled reports every outcome.

**Strong answer:** Discusses dependency graphs, latency, independent request states, preserving useful UI, and avoiding one global spinner.

**Common incorrect answer:** Parallel requests always require Promise.all.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Load multiple dashboard sections resiliently.

## Q15

**Category:** Networking  
**Difficulty:** hard

**Question:** Design Retry and a request-state model, including stale data and duplicate actions.

**Minimum acceptable:** Represent loading/error/success explicitly, scope Retry to the failed operation, and disable duplicates.

**Strong answer:** Discusses idle/refreshing, previous data, operation-specific error, idempotency, capped exponential backoff with jitter, and retryable status codes.

**Common incorrect answer:** Retry every failure forever and clear all data.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Create recoverable, honest UX.

## Q16

**Category:** Testing  
**Difficulty:** medium

**Question:** When should you use getBy, queryBy, findBy, and waitFor?

**Minimum acceptable:** getBy expects now, queryBy allows absence, findBy awaits appearance, waitFor retries an assertion.

**Strong answer:** Explains accessible queries, disappearance, avoiding unnecessary waitFor, and assertions tied to observable behaviour.

**Common incorrect answer:** Wrap every assertion in waitFor.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Test loading and asynchronous completion.

## Q17

**Category:** Testing  
**Difficulty:** medium

**Question:** Why use userEvent and MSW in a React integration test?

**Minimum acceptable:** userEvent models user interaction; MSW intercepts requests at the network boundary.

**Strong answer:** Covers setup, onUnhandledRequest error, per-test server.use overrides, resetHandlers, realistic accessibility events, and avoiding mocked implementation details.

**Common incorrect answer:** Mock the custom hook and call event handlers directly.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Verify UI and network behaviour together.

## Q18

**Category:** Testing  
**Difficulty:** medium

**Question:** Compare unit, integration, and E2E tests and explain deterministic fixtures.

**Minimum acceptable:** Choose the smallest level that proves the risk; fixed fixtures make results repeatable.

**Strong answer:** Discusses confidence/cost, boundary contracts, no live backend, controlled clocks, cleanup, and stable IDs/dates.

**Common incorrect answer:** E2E tests make all other tests unnecessary.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Select useful interview-sized coverage.

## Q19

**Category:** Testing  
**Difficulty:** hard

**Question:** How would you test loading, error, empty, Retry, and stale-response behaviour?

**Minimum acceptable:** Override handlers, observe accessible UI states, interact with Retry, and assert the final visible result.

**Strong answer:** Adds controlled delays/fake timers where relevant, verifies old data cannot overwrite new, resets timers/handlers, and avoids arbitrary sleeps.

**Common incorrect answer:** Assert internal state variables or implementation call order only.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Cover the highest-risk request transition.

## Q20

**Category:** Scenario  
**Difficulty:** medium

**Question:** What is the highest-risk correctness boundary in Current User and Transactions?

**Minimum acceptable:** Identify the network-to-UI boundary and one user-visible failure.

**Strong answer:** Connect response.ok, HTTP versus network failure, DTO mapping, runtime validation, Promise.all/allSettled, partial failure, and accessible asynchronous tests to a concrete, minimal implementation order.

**Common incorrect answer:** Start with abstractions or styling before a working slice.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Prioritise the practical exercise.

## Q21

**Category:** Scenario  
**Difficulty:** hard

**Question:** How would you prevent the most important invalid or stale state in Current User and Transactions?

**Minimum acceptable:** Name the invalid state and a direct guard.

**Strong answer:** Model the state transition, cleanup, error path, and behavioural evidence without overengineering.

**Common incorrect answer:** Rely on a type assertion or disabled lint rule.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Defend the solution’s state model.

## Q22

**Category:** Scenario  
**Difficulty:** medium

**Question:** Which single behavioural test gives the most confidence for Current User and Transactions, and why?

**Minimum acceptable:** Choose a user-visible asynchronous flow tied to the main risk.

**Strong answer:** Specify MSW override, user action, accessible observation, deterministic timing, and failure signal.

**Common incorrect answer:** Only test that the page heading renders.

**Red flags:** Confidently treats compile-time types as runtime validation, ignores user-visible failures, or cannot connect the answer to the code.

**Neutral follow-up:** “How would that change the behaviour we can observe here?”

**Advanced follow-up:** “What trade-off would make a production solution different without adding interview-time complexity?”

**Connection to practical:** Connect testing effort to product risk.
