---
description: Retry or continue after work failure
model: github-copilot/gpt-5.1
---

Recovery workflow:

1. **Acknowledge Failure**
   - Work was interrupted or failed
   - User invoked `/retry` to recover

2. **Simple Assessment**
   - What was the last attempted operation?
   - Can it be retried safely?

3. **Get Back on Track**
   - Propose retrying last operation
   - Execute and continue
   - If unclear what to retry, ask user

Always show commands before execution and explain their impact.
