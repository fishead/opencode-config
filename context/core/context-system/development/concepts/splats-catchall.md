# Concept: Splats (Catchall)

**Core Idea**: Routes ending with `/*` match any remaining URL path. Splats capture everything after the preceding segment.

**Key Points**:
- Syntax: `route("path/*", "./file.tsx")`
- Captures remaining path in `params["*"]`
- Useful for file downloads, 404s, or dynamic routing
- Must destructure with rename: `const { "*": splat } = params`
- Can use `route("*", "./404.tsx")` as catchall for unmatched routes

**Quick Example**:
```tsx
route("files/*", "./files.tsx")

export async function loader({ params }: Route.LoaderArgs) {
  const { "*": splat } = params;  // "documents/report.pdf"
  return await downloadFile(splat);
}
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/splat-catchall.tsx
