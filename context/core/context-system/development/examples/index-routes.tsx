# Example: Index Routes

**Scenario**: Dashboard with default home view

**Code**:
```tsx
// routes.ts
route("dashboard", "./dashboard.tsx", [
  index("./dashboard-home.tsx"),    // Default at /dashboard
  route("settings", "./dashboard-settings.tsx"),  // At /dashboard/settings
  route("profile", "./dashboard-profile.tsx"),    // At /dashboard/profile
])

// dashboard.tsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />  {/* Renders index route by default */}
    </div>
  );
}
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/index-routes.md
