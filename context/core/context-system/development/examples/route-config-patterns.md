# Example: Route Config Patterns

**Scenario**: Complete route configuration with index, layout, and prefix helpers

**Code**:
```ts
import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.tsx"),
    route(":city", "./concerts/city.tsx"),
    route("trending", "./concerts/trending.tsx"),
  ]),
] satisfies RouteConfig;
```

**Resulting URLs**:
- `/` (home)
- `/about`
- `/auth/login`
- `/auth/register`
- `/concerts`
- `/concerts/:city`
- `/concerts/trending`

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/route-configuration.md
