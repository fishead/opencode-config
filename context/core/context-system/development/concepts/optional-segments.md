# Concept: Optional Segments

**Core Idea**: Adding `?` to a route segment makes it optional in the URL. The matched value may be undefined or a string.

**Key Points**:
- Syntax: `route(":param?", "./file.tsx")` or `route("static?", "./file.tsx")`
- Optional segment can be present or missing
- Value is `string | undefined` (strict typing)
- Enables flexible routing patterns
- Can be combined with dynamic segments

**Quick Example**:
```tsx
// Matches /categories and /en/categories
route(":lang?/categories", "./categories.tsx")

// Matches /users/123/edit and /users/123
route("users/:userId/edit?", "./user.tsx")
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - concepts/dynamic-segments.md
  - concepts/route-configuration.md
