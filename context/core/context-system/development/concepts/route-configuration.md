# Concept: Route Configuration

**Core Idea**: Routes are configured in `app/routes.ts` using a declarative API with URL patterns and file paths. Each route defines a path pattern and points to a route module that controls its behavior.

**Key Points**:
- Required parts: URL pattern (string) + file path (relative)
- Route config array must satisfy `RouteConfig` type for type safety
- Supports nested configuration with layout, prefix, and index helpers
- Can combine programmatic config with file system conventions (flatRoutes)

**Quick Example**:
```ts
import { route, index, layout } from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),
  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
  ]),
] satisfies RouteConfig;
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/route-config-patterns.md
  - concepts/route-modules.md
