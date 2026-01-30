# Example: Splat Catchall Routes

**Scenario**: File download endpoint

**Code**:
```tsx
// routes.ts
route("files/*", "./files.tsx")

// files.tsx
import type { Route } from "./+types/files";

export async function loader({ params }: Route.LoaderArgs) {
  const { "*": filePath } = params;
  // filePath is the remaining path after "files/"
  const file = await getFile(filePath);
  return {
    contentType: file.type,
    content: file.data,
    filename: file.name,
  };
}

// 404 catchall route
route("*", "./not-found.tsx")
```

**Matches**: `/files/documents/report.pdf`, `/files/images/photo.jpg`

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/splats-catchall.md
