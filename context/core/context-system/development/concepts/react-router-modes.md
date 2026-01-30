# Concept: React Router Modes

**Core Idea**: React Router v7 offers three complementary modes (Declarative, Data, Framework) for increasing architectural control. Framework Mode is recommended for most new apps as it provides the most help, while Declarative Mode offers the least control.

**Key Points**:
- Modes are additive - Framework includes Data which includes Declarative
- Declarative Mode: Basic URL matching, navigation, and active states (Link, useNavigate, useLocation)
- Data Mode: Adds data loading, actions, and pending states (loader, action, useFetcher)
- Framework Mode: Full feature set with Vite plugin, type-safe Route Modules, intelligent code splitting
- Choose mode based on control vs. help needed: Framework (most help) → Data (balanced) → Declarative (most control)

**Quick Example**:
```tsx
// Framework Mode (most help)
import { Route } from "./+types/product.tsx";

export async function loader({ params }: Route.LoaderArgs) {
  return { product: await getProduct(params.pid) };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.product.name}</div>;
}
```

**Reference**: https://reactrouter.com/start/modes
**Related**:
  - concepts/react-router-apis.md
  - guides/setting-up-framework-mode.md
