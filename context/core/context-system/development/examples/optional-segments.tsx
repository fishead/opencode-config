# Example: Optional Segments

**Scenario**: Multi-language support with optional language prefix

**Code**:
```tsx
// routes.ts
route(":lang?/categories", "./categories.tsx")
route(":lang?/products", "./products.tsx")
route("about", "./about.tsx")  // English about page

// categories.tsx
import type { Route } from "./+types/categories";

export async function loader({ params }: Route.LoaderArgs) {
  const lang = params.lang ?? "en";  // "en" if not present
  return await getCategories(lang);
}
```

**Matches**: `/categories`, `/en/categories`, `/zh/categories`

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/optional-segments.md
