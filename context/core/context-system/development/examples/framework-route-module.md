# Example: Framework Route Module

**Scenario**: Type-safe route with server-side data loading in Framework Mode

**Code**:
```tsx
// product.tsx (Route Module)
import { Route } from "./+types/product.tsx";

export async function loader({ params }: Route.LoaderArgs) {
  let product = await getProduct(params.pid);
  return { product };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>{loaderData.product.name}</h1>
      <p>{loaderData.product.description}</p>
    </div>
  );
}
```

**Key Features**:
- Type-safe params via Route.LoaderArgs
- Automatic type inference for loaderData
- Server-side data fetching before render
- Integrated with Vite code splitting

**Reference**: https://reactrouter.com/start/framework/route-module
**Related**: concepts/react-router-modes.md
