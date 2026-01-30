# Concept: Dynamic Segments

**Core Idea**: Paths starting with `:` capture URL segments as typed parameters. They're used for IDs, slugs, or any variable path parts.

**Key Points**:
- Syntax: `route(":paramName", "./file.tsx")`
- Values captured in `params` prop (type-safe)
- Multiple dynamic segments allowed: `route("a/:b/c/:d", ...)`
- Type inferred from Route type (e.g., `params: { teamId: string }`)
- Always require string type (validation is per-route)

**Quick Example**:
```tsx
route("teams/:teamId", "./team.tsx")

// team.tsx
import type { Route } from "./+types/team";

export async function loader({ params }: Route.LoaderArgs) {
  // params.teamId is string
  return await fetchTeam(params.teamId);
}
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/dynamic-segments-types.tsx
