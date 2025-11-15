import Host from '@fusion/auto-hedger';
import { useFusionTheme } from '@fusion/uicore';

export default function App() {
  const { theme, toggleTheme } = useFusionTheme();

  return (
    <div className="d-flex px-1 fill-vp flex-column">
      <div className="d-flex flex-shrink-0">
        <div className="col-2">
          <img src="./images/logo-header-1.png" alt="Fusion Logo" />
        </div>
        <div className="col-10">World!</div>
      </div>
      <div className="d-flex flex-grow-1">
        <div className="col-4">Side bar</div>
        <div className="col-8">
          <button onClick={toggleTheme}>Current Theme: {theme}</button>
        </div>
      </div>
      <div className="d-flex flex-shrink-0">
        <Host />
      </div>
    </div>
  );
}
