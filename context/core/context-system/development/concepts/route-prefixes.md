# Concept: Route Prefixes

**Core Idea**: The `prefix()` helper adds a path prefix to multiple routes without creating a parent route in the route tree.

**Key Points**:
- Use `...prefix("path", [routes])` in route config
- Modifies child paths by adding prefix
- Does NOT create nested route structure
- Equivalent to manually prefixing each route path
- Useful for versioning or feature grouping

**Quick Example**:
```tsx
...prefix("v1", [
  route("users", "./users.tsx"),
  route("posts", "./posts.tsx"),
])
// Creates /v1/users and /v1/posts (not /v1/users without nesting)
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/route-config-patterns.md
