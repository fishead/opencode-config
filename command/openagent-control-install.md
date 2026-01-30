---
description: Install OpenAgents Control in this project
agent: OpenAgents Control Project Manager
---

Install or bootstrap OpenAgents Control (AOC) for this project.

Task:
$ARGUMENTS

When installing AOC:
1. Ask which profile to install:
   - **essential**: Core agents only - minimal setup
   - **developer**: Code-focused development tools
   - **business**: Content and business-focused tools
   - **full**: Everything except system builder
   - **advanced**: Complete system with all components

2. Default to local installation (`.opencode/`) for this project

3. Check prerequisites:
   - Verify bash 3.2+
   - Check curl and jq availability
   - Validate git installation

4. Inspect current project setup:
   - Check for existing `.opencode/` directory
   - Identify project type (language, framework, etc.)
   - Determine which components are most relevant

5. Propose installation command:
   - Suggest profile based on project needs
   - Example: `/aoc-install developer --local`
   - Explain what will be installed

6. Execute installation and verify:
   - Run the installation command
   - Verify all files downloaded
   - Check agent availability
   - Report success/failure

After installing, summarize:
```
✓ Installed AOC with [profile] profile
Location: .opencode/
Components: [list of installed components]

Next steps:
- Initialize context: /aoc-configure --init-context
- Setup environment: /aoc-configure --setup-env
- Check status: /aoc-configure --status
```
