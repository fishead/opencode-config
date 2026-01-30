# Example: Layout Routes

**Scenario**: Marketing pages with shared layout

**Code**:
```tsx
// routes.ts
export default [
  layout("./marketing/layout.tsx", [
    index("./marketing/home.tsx"),
    route("contact", "./marketing/contact.tsx"),
  ]),
] satisfies RouteConfig;

// marketing/layout.tsx
import { Outlet } from "react-router";

export default function MarketingLayout() {
  return (
    <div className="marketing-layout">
      <header>Marketing Header</header>
      <main>
        <Outlet />  {/* Renders home.tsx or contact.tsx */}
      </main>
      <footer>Marketing Footer</footer>
    </div>
  );
}
```

**URLs**: `/` (home), `/contact` (no `/marketing` prefix)

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/layout-routes.md
