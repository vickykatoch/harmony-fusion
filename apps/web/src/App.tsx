import Host from '@fusion/auto-hedger';
import { useFusionTheme } from '@fusion/uicore';
import { HeaderBar } from './header';
import { SideBar } from './sidebar';

export default function App() {
  const { theme, toggleTheme } = useFusionTheme();

  return (
    <div className="d-flex px-1 fill-vp flex-column">
      <HeaderBar />
      <div className="d-flex flex-grow-1">
        <SideBar />
        <div className="flex-grow-1">
          <button onClick={toggleTheme}>Current Theme: {theme}</button>
        </div>
      </div>
      <div className="d-flex flex-shrink-0">
        <Host />
      </div>
    </div>
  );
}
