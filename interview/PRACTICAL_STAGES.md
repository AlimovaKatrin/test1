# Practical Stages — Current User and Transactions

Reveal exactly one stage at a time. Do not disclose future requirements.

## Stage 1

**Requirement:** Fetch the current user. Fetch recent transactions. Display the user’s full name. Display the transaction list.

**Business purpose:** Deliver the next smallest user-visible risk reduction for Current User and Transactions.

**Expected behaviour:** The candidate demonstrates the requirement in the preview and explains observable request states.

**Acceptance criteria:**

- The visible requirement works using the local API.
- Types describe real values; no `any` is introduced.
- Errors do not become successful data or permanent loading.
- Controls and status output are accessible.
- The candidate confirms preview or test evidence.

**Available API behaviour:** GET /api/user; GET /api/transactions.

**Product clarification answer:** Prefer the simplest behaviour that preserves useful data and prevents invalid or stale user-visible results.

**Hidden edge cases:** failure, empty data, duplicate or stale action, and malformed boundary data where relevant.

**Likely mistakes:** broad rewrite, swallowed error, unsafe assertion, one global loading flag, state mutation, or implementation-detail testing.

**Follow-up:** “What user-visible state proves this is correct?”

**Suggested time:** 8–20 minutes.

**Proceed when:** a working vertical slice is demonstrated or the time budget is exhausted.

## Stage 2

**Requirement:** Add distinct loading, user-error, transaction-error, empty, and success states. Check response.ok and preserve useful partial UI.

**Business purpose:** Deliver the next smallest user-visible risk reduction for Current User and Transactions.

**Expected behaviour:** The candidate demonstrates the requirement in the preview and explains observable request states.

**Acceptance criteria:**

- The visible requirement works using the local API.
- Types describe real values; no `any` is introduced.
- Errors do not become successful data or permanent loading.
- Controls and status output are accessible.
- The candidate confirms preview or test evidence.

**Available API behaviour:** GET /api/user; GET /api/transactions.

**Product clarification answer:** Prefer the simplest behaviour that preserves useful data and prevents invalid or stale user-visible results.

**Hidden edge cases:** failure, empty data, duplicate or stale action, and malformed boundary data where relevant.

**Likely mistakes:** broad rewrite, swallowed error, unsafe assertion, one global loading flag, state mutation, or implementation-detail testing.

**Follow-up:** “What user-visible state proves this is correct?”

**Suggested time:** 20–32 minutes.

**Proceed when:** a working vertical slice is demonstrated or the time budget is exhausted.

## Stage 3

**Requirement:** Map honest DTOs to domain models, validate amount at runtime, format money and dates, and provide contextual Retry controls.

**Business purpose:** Deliver the next smallest user-visible risk reduction for Current User and Transactions.

**Expected behaviour:** The candidate demonstrates the requirement in the preview and explains observable request states.

**Acceptance criteria:**

- The visible requirement works using the local API.
- Types describe real values; no `any` is introduced.
- Errors do not become successful data or permanent loading.
- Controls and status output are accessible.
- The candidate confirms preview or test evidence.

**Available API behaviour:** GET /api/user; GET /api/transactions.

**Product clarification answer:** Prefer the simplest behaviour that preserves useful data and prevents invalid or stale user-visible results.

**Hidden edge cases:** failure, empty data, duplicate or stale action, and malformed boundary data where relevant.

**Likely mistakes:** broad rewrite, swallowed error, unsafe assertion, one global loading flag, state mutation, or implementation-detail testing.

**Follow-up:** “What user-visible state proves this is correct?”

**Suggested time:** 32–45 minutes.

**Proceed when:** a working vertical slice is demonstrated or the time budget is exhausted.

## Stage 4

**Requirement:** Write an integration-style test for error → Retry click → success.

**Business purpose:** Deliver the next smallest user-visible risk reduction for Current User and Transactions.

**Expected behaviour:** The candidate demonstrates the requirement in the preview and explains observable request states.

**Acceptance criteria:**

- The visible requirement works using the local API.
- Types describe real values; no `any` is introduced.
- Errors do not become successful data or permanent loading.
- Controls and status output are accessible.
- The candidate confirms preview or test evidence.

**Available API behaviour:** GET /api/user; GET /api/transactions.

**Product clarification answer:** Prefer the simplest behaviour that preserves useful data and prevents invalid or stale user-visible results.

**Hidden edge cases:** failure, empty data, duplicate or stale action, and malformed boundary data where relevant.

**Likely mistakes:** broad rewrite, swallowed error, unsafe assertion, one global loading flag, state mutation, or implementation-detail testing.

**Follow-up:** “What user-visible state proves this is correct?”

**Suggested time:** 45–52 minutes.

**Proceed when:** a working vertical slice is demonstrated or the time budget is exhausted.
