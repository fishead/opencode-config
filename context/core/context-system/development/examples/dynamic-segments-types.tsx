# Example: Dynamic Segments with Type Safety

**Scenario**: Product page with typed params

**Code**:
```tsx
// routes.ts
route("products/:categoryId/:productId", "./product.tsx")

// product.tsx
import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
  // params automatically typed:
  // { categoryId: string; productId: string }
  const product = await getProduct({
    categoryId: params.categoryId,
    productId: params.productId,
  });
  return product;
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.name}</h1>;
}
```

**Type Inference**: TypeScript knows params are strings, loaderData is Product type

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/dynamic-segments.md
