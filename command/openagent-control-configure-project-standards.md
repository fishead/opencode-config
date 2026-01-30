---
description: Configure OpenAgents Control project standards and context
agent: OpenAgents Control Project Manager
---

Configure OpenAgents Control project standards, context, and coding patterns for this project.

Task:
$ARGUMENTS

The context system is your secret weapon - it teaches AI agents your project's coding standards so they generate code that matches your patterns automatically.

Common configuration tasks:

1. **Initialize project context**: `--init-context`
   - Creates `.opencode/context/project/project-context.md`
   - Guides you through documenting your coding standards
   - Includes templates for common patterns

2. **Add coding standards**: `--add-standards [type]`
   - code-quality: Modular design, functional patterns
   - security: Input validation, authentication patterns
   - naming: File, function, variable conventions
   - architecture: Your project structure

3. **Add UI patterns**: `--add-ui-patterns`
   - React/Next.js component patterns
   - Tailwind CSS conventions
   - Design system standards
   - Responsive design patterns

4. **Add workflow standards**: `--add-workflow [type]`
   - git-commit: Commit message conventions
   - code-review: Review checklist
   - testing: Test coverage requirements

5. **Add API patterns**: `--add-api-patterns`
   - Endpoint structure
   - Response format
   - Error handling
   - Authentication/authorization

When configuring context:
1. Analyze current project structure
2. Identify technology stack (language, frameworks, libraries)
3. Propose appropriate standards based on stack
4. Create context files with clear examples from your project
5. Ensure patterns are specific and actionable

Context file structure:
```
.opencode/context/
├── core/                    # Universal standards
│   ├── standards/
│   │   ├── code-quality.md
│   │   └── security-patterns.md
│   └── workflows/
│       └── external-libraries.md
├── ui/                      # Design & UX
│   └── web/
│       ├── ui-styling-standards.md
│       └── react-patterns.md
├── project/                  # YOUR custom patterns
    └── project-context.md
```

Example project-context.md:
```markdown
# Project Coding Standards

## API Endpoint Pattern

All API endpoints should:
- Validate input with Zod
- Return { success, data, error }
- Log important operations
- Use 400 for validation, 401 for auth, 500 for server

## React Component Pattern

All components should:
- Use TypeScript with strict mode
- Export named component
- Include JSDoc comments
- Use React.FC type

## Security Checklist

All endpoints must:
- [ ] Validate user authentication
- [ ] Check user permissions
- [ ] Sanitize and validate inputs
- [ ] Use parameterized queries
- [ ] Implement rate limiting
```

After configuring, summarize:
```
✓ Configured project context for [project-type]
Files created:
- .opencode/context/project/project-context.md
- [additional context files]

Next steps:
- Use AOC agents: @[agent-name]
- Agents will automatically follow your patterns
- Update context when patterns change
```
