# Example: Route Module with Loader

**Scenario**: Type-safe route module with data loading

**Code**:
```tsx
// team.tsx
import type { Route } from "./+types/team";

export async function loader({ params }: Route.LoaderArgs) {
  const team = await fetchTeam(params.teamId);
  return { name: team.name, members: team.members };
}

export default function Team({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>{loaderData.name}</h1>
      <ul>
        {loaderData.members.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Type Safety**:
- `params` automatically typed: `{ teamId: string }`
- `loaderData` automatically typed: `{ name: string; members: Member[] }`

**Reference**: https://reactrouter.com/start/framework/routing
**Related**: concepts/route-modules.md
