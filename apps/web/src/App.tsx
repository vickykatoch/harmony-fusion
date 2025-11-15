import { Button } from '@fusion/button';
import Host from '@fusion/auto-hedger';
import { FusionThemeProvider } from '@fusion/uicore';

export default function App() {
  return (
    <FusionThemeProvider>
      <div className="d-flex px-1 fill-vp flex-column">
        <div className="d-flex flex-shrink-0">
          <div className="col-2">Hello</div>
          <div className="col-10">World!</div>
        </div>
        <div className="d-flex flex-grow-1">
          <div className="col-4">Side bar</div>
          <div className="col-8">Main content</div>
        </div>
        <div className="d-flex flex-shrink-0">
          <Host />
        </div>
        {/* <h1>Harmony Fusion App</h1>
        <p>2 + 3 = {5}</p>
        <Button onClick={() => alert('Hello from shared UI!')}>Click me</Button>
         */}
      </div>
    </FusionThemeProvider>
  );
}
