# Solution Notes — Current User and Transactions

## Implementation order

1. Establish the smallest request-to-visible-UI slice.
2. Make DTOs and response handling honest.
3. Model loading, error, empty, success, and operation-specific states.
4. Add the scenario’s highest-risk recovery or stale-result behaviour.
5. Add behavioural MSW tests.

## State model

State remains local and explicit. Impossible or contradictory combinations are reduced with discriminated unions or operation-scoped state. Useful previous or unrelated data is preserved where product behaviour requires it.

## API boundary

Native fetch sends only the fake interview token. Every response checks `response.ok`; JSON begins as `unknown`; manual guards map external DTOs into UI-safe values. 204 is parsed as no content.

## Runtime validation and errors

Boundary checks reject malformed arrays, object fields, enums, and numeric strings. Caught values start as `unknown` and become contextual Error instances. Request errors are never swallowed.

## Testing strategy

React Testing Library observes accessible UI. MSW overrides deterministic network behaviour. Tests cover success, loading/empty, relevant HTTP errors, Retry or user interaction, and the scenario-specific race/partial/duplicate risk.

## Scenario-specific edge cases

Independent user/transaction failure, invalid amount, partial UI, and contextual Retry..

## Rejected alternatives

Redux and React Query are unnecessary for this one-hour exercise. A schema library, generic data layer, broad component system, and pixel-perfect styling would obscure the primary evidence.

## One-hour choices and limitations

The solution favours direct types, small helpers, and visible behaviour. Validation is intentionally manual and concise; production monitoring, localisation, full accessibility audit, and E2E coverage remain outside the exercise.
