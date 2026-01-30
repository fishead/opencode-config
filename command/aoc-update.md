---
description: Update OpenAgentsControl in this project
agent: OpenAgentsControlProjectManager
---

Update or upgrade existing OpenAgentsControl setup in this project.

Task:
$ARGUMENTS

When updating AOC:
1. Check current installation:
   - Verify AOC is installed
   - Check current version/profile
   - Identify installed components

2. Determine update scope:
   - Update specific components (agents, commands, context)
   - Update everything
   - Switch to different profile

3. Backup existing installation:
   - Always create backup before updating
   - Preserve custom configurations
   - Save modified context files

4. Update process:
   - Fetch latest components
   - Apply updates incrementally
   - Restore preserved configurations

5. Verify updates:
   - Check all files updated
   - Verify agent functionality
   - Test commands still work

After updating, summarize:
```
✓ Updated AOC to [version]
Backup created: .opencode.backup.YYYY-MM-DD-HHMMSS/
Updated: [list of components]

Next steps:
- Verify installation: /aoc-configure --status
- Initialize new context if needed: /aoc-configure --init-context
```
