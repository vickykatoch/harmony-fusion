import { Button } from '@hf/button';
import Host from '@hf/auto-hedger';
import { FusionThemeProvider } from '@fusion/uicore';

export default function App() {
  return (
    <FusionThemeProvider>
      <div style={{ padding: 16 }}>
        <h1>Harmony Fusion App</h1>
        <p>2 + 3 = {5}</p>
        <Button onClick={() => alert('Hello from shared UI!')}>Click me</Button>
        <Host />
      </div>
    </FusionThemeProvider>
  );
}
