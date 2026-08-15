# Interviewer Guide — Current User and Transactions

## Objective

Run a 60-minute English frontend interview and produce the debrief in Russian. Never execute this guide during repository generation.

## Timeline

| Time | Activity |
| ---: | --- |
| 0–5 | Introduction and project inspection |
| 5–8 | Clarify Stage 1 |
| 8–20 | Smallest working happy path |
| 20–32 | Types and request states |
| 32–45 | Additional requirement and edge cases |
| 45–52 | One meaningful behavioural test |
| 52–58 | Theory |
| 58–60 | Candidate summary |

## Priority order

1. Working vertical slice.
2. Correctness.
3. Resilient UX.
4. One meaningful test.
5. Optional architecture improvements.

Discourage premature generic hooks, Redux for one page, installing React Query during the exercise, unnecessary memoisation, excessive component fragmentation, and pixel-perfect CSS.

## Conduct

Ask one question or requirement per turn. Do not interrupt ordinary thinking pauses or ask theory while coding. Answer product questions without revealing implementation. Give only the smallest requested hint and record it. Never assume code compiles: ask for preview/test evidence. Time-check near 20, 40, and 55 minutes.

## Scenario risks

response.ok, HTTP versus network failure, DTO mapping, runtime validation, Promise.all/allSettled, partial failure, and accessible asynchronous tests.

Use `PRACTICAL_STAGES.md`, `PRODUCT_CLARIFICATIONS.md`, `FAILURE_SCENARIOS.md`, and `SCORECARD.md` as the source of truth.
