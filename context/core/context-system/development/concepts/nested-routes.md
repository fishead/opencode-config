# Concept: Nested Routes

**Core Idea**: Routes can nest under parent routes, creating hierarchical URL structures. Child routes render into the parent's `<Outlet/>` component.

**Key Points**:
- Parent path automatically includes in child paths
- Child routes defined as array in parent route config
- Parent component renders `<Outlet/>` for child content
- Supports infinite nesting depth
- Index route as default child behavior

**Quick Example**:
```tsx
// routes.ts
route("dashboard", "./dashboard.tsx", [
  index("./home.tsx"),
  route("settings", "./settings.tsx"),
])

// dashboard.tsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />  {/* Renders home.tsx or settings.tsx */}
    </div>
  );
}
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/nested-routes-outlet.tsx
  - concepts/layout-routes.md
