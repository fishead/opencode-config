# Concept: Component Routes

**Core Idea**: React Router components that match URLs can be used anywhere in the component tree. They don't participate in route module features.

**Key Points**:
- Use standard `<Routes>` and `<Route>` components
- Must be rendered manually in JSX
- No data loading, actions, or code splitting
- More limited use cases than route modules
- Useful for wizard steps, tabbed interfaces, or conditional rendering

**Quick Example**:
```tsx
function Wizard() {
  return (
    <Routes>
      <Route index element={<StepOne />} />
      <Route path="step-2" element={<StepTwo />} />
      <Route path="step-3" element={<StepThree />} />
    </Routes>
  );
}
```

**Reference**: https://reactrouter.com/start/framework/routing
**Related**:
  - examples/route-config-patterns.md
