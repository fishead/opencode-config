# OpenCode Agent and Command Builder Defaults

## Agent File Format

Agents are markdown files with YAML frontmatter:

```markdown
---
id: agent-identifier
name: Agent Display Name
description: Brief description of the agent
mode: primary | subagent | all
model: provider/model-id
temperature: 0.0-1.0
tools:
  bash: true | false
  write: true | false
  edit: true | false
  grep: true | false
  glob: true | false
  read: true | false
---

System prompt here...
```

### Agent Metadata

| Field | Format | Description |
|-------|---------|-------------|
| `id` | kebab-case | Unique identifier, must match file name (without `.md`) |
| `name` | Pascal Case | Display name for user-facing purposes, used when commands reference agents. Format: Pascal Case with spaces between words (e.g., "Code Helper") |

Example:
- File: `~/.config/opencode/agents/code-helper.md`
- Frontmatter: `id: code-helper`, `name: Code Helper`

## Agent Names

Generated from description using:
- `id`: lowercase letters, hyphens between words, purpose-reflective naming
- `name`: Pascal Case derived from `id` with spaces between words (e.g., `code-helper` → `Code Helper`)

## Available Models

Valid model formats from `opencode models`:

| Provider | Models |
|----------|--------|
| `github-copilot` | `gpt-5.1`, `gpt-5.1-codex`, `claude-sonnet-4.5`, `claude-opus-4.5`, `gpt-4o`, `gpt-5-mini` |
| `zai-coding-plan` | `glm-4.7`, `glm-4.7-flash`, `glm-4.6`, `glm-4.5` |
| `opencode` | `glm-4.7-free`, `gpt-5-nano`, `kimi-k2.5-free` |

Recommended models by agent type:
- **Coder**: `github-copilot/gpt-5.1-codex` or `zai-coding-plan/glm-4.7`
- **Reviewer**: `github-copilot/claude-sonnet-4.5`
- **Tester**: `github-copilot/gpt-5.1`
- **Documenter**: `github-copilot/gpt-5.1`
- **General**: `opencode/glm-4.7-free` (free option) or `github-copilot/gpt-5.1`

## Agent Types Mapping

| Description Keywords | Type | Default Tools |
|---------------------|------|---------------|
| code, write, debug, develop | coder | bash, write, edit, grep, glob |
| review, security, audit, check | reviewer | bash, grep, glob (read-only) |
| test, coverage, testing | tester | bash, write, grep, glob |
| documentation, docs, write docs | documenter | write, grep, glob |
| analyze, understand, explore | explorer | bash, grep, glob (read-only) |
| plan, organize, tasks | planner | bash, grep, glob |
| refactor, improve, optimize | refactorer | bash, write, edit, grep, glob |
| general, help, assistant | general | all tools |

## Temperature Guidelines

| Task Type | Temperature |
|-----------|------------|
| Code review | 0.1-0.2 |
| Code writing | 0.3-0.4 |
| Testing | 0.2-0.3 |
| Documentation | 0.4-0.5 |
| General tasks | 0.5-0.6 |
| Creative tasks | 0.7-0.8 |

## Tool Descriptions

| Tool | Purpose |
|------|---------|
| bash | Execute shell commands |
| write | Create new files |
| edit | Modify existing files |
| grep | Search file contents |
| glob | Find files by pattern |
| read | Read file contents |

## Permission Patterns

### Read-Only Agent (Reviewer)
```yaml
tools:
  bash: false
  write: false
  edit: false
  grep: true
  glob: true
  read: true
```

### Write-Enabled Agent (Coder)
```yaml
tools:
  bash: true
  write: true
  edit: true
  grep: true
  glob: true
  read: true
```

### Documentation Agent
```yaml
tools:
  bash: false
  write: true
  edit: true
  grep: true
  glob: true
  read: true
```

## Location Paths

- **Global**: `~/.config/opencode/agents/[name].md`
- **Local**: `.opencode/agents/[name].md`

## Common System Prompt Patterns

### Coder Pattern
```
You are a [purpose] assistant.

Guidelines:
1. [First guideline]
2. [Second guideline]
3. [Third guideline]

When working:
- [Action item]
- [Action item]
```

### Reviewer Pattern
```
You are a [domain] reviewer.

Review focus:
- [Area 1]
- [Area 2]
- [Area 3]

Provide:
- Specific findings
- Severity levels
- Suggested fixes
```

## Error Handling

- Invalid description: Ask for clarification
- Missing location: Ask user to specify local/global
- Agent exists: Offer to overwrite or choose different name
- Permission denied: Check directory permissions

---

## Command File Format

Commands are markdown files with YAML frontmatter:

```markdown
---
description: Brief description of what the command does
agent: AgentDisplayName (optional - use agent's name from frontmatter, or id, or path-derived)
model: provider/model-id (optional)
---

Command template or prompt here...
$ARGUMENTS (if command accepts additional input)
```

### Command Agent Reference

When a command specifies an `agent` in its frontmatter, resolve the effective agent name using this sequence:

1. **Agent `name`**: If the referenced agent file has a `name` field in its frontmatter, use that (e.g., `CodeHelper`)
2. **Agent `id`**: Otherwise, if it has an `id` field, use that (e.g., `code-helper`)
3. **Path-derived**: Otherwise, derive from the agent file path by replacing `/` with `-` and removing `.md`

Example:
- Agent file: `~/.config/opencode/agents/code-helper.md`
- Frontmatter: `id: code-helper`, `name: CodeHelper`
- Command should reference: `agent: CodeHelper`

## Command Names

Generated from description using:
- Lowercase letters
- Hyphens between words
- Purpose-reflective naming (2-3 words max)
- Action-oriented (e.g., "run-tests", "review-code", "generate-docs")

## Command Types Mapping

| Description Keywords | Type | Example Command |
|---------------------|------|----------------|
| run test, test suite, coverage | test-runner | Run the full test suite and show results |
| review code, code review | code-review | Review code changes for quality and bugs |
| generate doc, write documentation | doc-generator | Generate documentation for the codebase |
| build, compile, package | build-command | Build the project and handle errors |
| deploy, publish | deploy-command | Deploy the application to production |
| lint, format, check | lint-command | Run linter and fix issues |
| analyze, investigate | analyze-command | Analyze code for patterns and issues |

## Command Templates

### Test Runner Pattern
```markdown
---
description: Run tests with coverage
agent: build
---

Run the test suite and show results:

!`npm test`

Focus on failing tests and suggest fixes.
```

### Code Review Pattern
```markdown
---
description: Review code changes
agent: plan
---

Review the following changes:

!`git diff`

Check for:
- Code quality
- Security issues
- Performance concerns
- Bugs or edge cases
```

### Documentation Pattern
```markdown
---
description: Generate documentation
agent: build
---

Generate documentation for: $ARGUMENTS

Include:
- Overview
- Usage examples
- API reference
- Parameters
```

### Build Pattern
```markdown
---
description: Build the project
agent: build
---

Build the project and show output:

!`npm run build`

If build fails, analyze errors and suggest fixes.
```

## Location Paths (Commands)

- **Global**: `~/.config/opencode/command/[name].md`
- **Local**: `.opencode/command/[name].md`

## Common Command Prompt Patterns

### With Arguments
```markdown
Perform [task] for: $ARGUMENTS

Steps:
1. [First step]
2. [Second step]
3. [Third step]
```

### With Bash Output
```markdown
Analyze the following results:

!`command-to-run`

Based on results, suggest improvements.
```

### With File Reference
```markdown
Review the code in @path/to/file.md

Check for:
- [Checklist item 1]
- [Checklist item 2]
```

### Without Arguments
```markdown
Run the [task] process:

1. [First step]
2. [Second step]

Show summary when complete.
```

## Error Handling (Commands)

- Invalid description: Ask for clarification
- Missing location: Ask user to specify local/global
- Command exists: Offer to overwrite or choose different name
- Permission denied: Check directory permissions
