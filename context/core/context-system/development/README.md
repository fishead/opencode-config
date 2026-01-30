# Development Context

**Last Updated**: 2026-01-30

## File Structure

```
development/
├── concepts/       # Core design decisions (Design patterns, architecture choices)
├── examples/       # Working code samples
├── guides/         # Step-by-step procedures
├── lookup/         # Quick reference data (commands, paths, API signatures)
└── errors/         # Common errors and gotchas
```

## Categories

- **concepts/**: What it is (1-3 sentences, 3-5 key points, minimal example)
- **examples/**: Working code that demonstrates patterns
- **guides/**: How to do things (step-by-step workflows)
- **lookup/**: Reference data for quick lookups
- **errors/**: Common issues and solutions

## Format

All files follow MVI (Minimal Viable Information) principle:
- <200 lines per file
- Scannable in <30 seconds
- Reference full docs, don't duplicate
- Cross-references enabled

## Current Content

### Concepts (10 files)
- route-configuration.md - URL pattern + file path configuration
- route-modules.md - loader, action, error boundaries
- nested-routes.md - Parent-child hierarchy via Outlet
- layout-routes.md - Nesting without URL segments
- index-routes.md - Default child rendering
- route-prefixes.md - Path prefix without parent route
- dynamic-segments.md - URL parameters (:)
- optional-segments.md - Conditional path parts (?)
- splats-catchall.md - Remaining path matching (*)
- component-routes.md - Manual React Router components

### Examples (8 files)
- route-config-patterns.md - Complete route configuration
- route-module-loader.tsx - Type-safe data loading
- nested-routes-outlet.tsx - Dashboard with settings
- layout-routes-example.tsx - Shared marketing layout
- index-routes.tsx - Dashboard home default
- dynamic-segments-types.tsx - Typed params
- optional-segments.tsx - Multi-language support
- splat-catchall.tsx - File download endpoint
