# Concept: Layout Routes

**Core Idea**: Layout routes create nesting for child routes without adding URL segments. They're like the root route but can be placed at any level.

**Key Points**:
- Use `layout()` in route config
- Child routes render into layout's `<Outlet/>`
- URL structure unchanged (no parent segment added)
- Enables shared UI structures (navbars, sidebars, footers)
- Can nest layouts arbitrarily

**Quick Example**:
```tsx
layout("./auth/layout.tsx", [
  route("login", "./login.tsx"),
  route("register", "./register.tsx"),
])
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/layout-routes-example.tsx
  - concepts/nested-routes.md
