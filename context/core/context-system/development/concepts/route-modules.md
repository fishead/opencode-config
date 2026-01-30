# Concept: Route Modules

**Core Idea**: Route modules are TypeScript files that define route behavior through loader, action, and error boundary functions. They provide type-safe params via Route types and are referenced in routes.ts.

**Key Points**:
- Reference in routes.ts: `route("path", "./module.tsx")`
- `loader()` runs before render for data loading
- `action()` handles form submissions and mutations
- Components receive typed `loaderData` and `params` via Route types
- Supports headers, error boundaries, and other route features

**Quick Example**:
```tsx
import type { Route } from "./+types/team";

export async function loader({ params }: Route.LoaderArgs) {
  return { name: await fetchTeam(params.teamId) };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.name}</h1>;
}
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/route-module-loader.tsx
  - guides/route-modules-guide.md
