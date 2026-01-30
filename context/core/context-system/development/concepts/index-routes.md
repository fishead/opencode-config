# Concept: Index Routes

**Core Idea**: Index routes render into their parent's `<Outlet/>` at the parent's URL, acting as a default child route. They cannot have children themselves.

**Key Points**:
- Use `index()` helper in route config
- Renders at parent path, not adding segment
- Only one index route per parent
- Cannot contain children routes
- Useful for default view in nested layouts

**Quick Example**:
```tsx
route("dashboard", "./dashboard.tsx", [
  index("./dashboard-home.tsx"),  // Renders at /dashboard
  route("settings", "./settings.tsx"),  // Renders at /dashboard/settings
])
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/index-routes.tsx
  - concepts/nested-routes.md
