# Example: Nested Routes with Outlet

**Scenario**: Dashboard with nested settings routes

**Code**:
```tsx
// routes.ts
route("dashboard", "./dashboard.tsx", [
  index("./dashboard-home.tsx"),
  route("settings", "./dashboard-settings.tsx"),
])

// dashboard.tsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <nav>
        <a href=".">Home</a>
        <a href="settings">Settings</a>
      </nav>
      <Outlet />  {/* Renders child route component here */}
    </div>
  );
}
```

**Resulting URLs**:
- `/dashboard` → renders `dashboard-home.tsx`
- `/dashboard/settings` → renders `dashboard-settings.tsx`

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/nested-routes.md
