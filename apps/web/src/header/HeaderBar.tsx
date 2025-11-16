import { FC } from 'react';
import { Avatar } from '@salt-ds/core';
import logoDark from '@images/logo-dark.jpg';
import logoLight from '@images/logo-light.jpg';
import { useFusionTheme } from '@fusion/uicore';
import { ThemeSettings } from './ThemeSettings';

const isDarkTheme = (theme: string) => theme === 'dark';

export const HeaderBar: FC = () => {
  const { theme } = useFusionTheme();
  const appLogo = isDarkTheme(theme) ? logoDark : logoLight; // You can change logos based on theme if needed
  return (
    <div className="d-flex p-2 flex-shrink-0 border-bottom border-1 border-secondary-subtle">
      <img src={appLogo} alt="Fusion Logo" height={40} width={150} className="flex-shrink-0" />
      <div className="flex-grow-1"> </div>
      <div className="d-flex flex-shrink-0 gap-2 align-items-center">
        <ThemeSettings />
        <Avatar name="Balwinder Katoch" size={1} />
      </div>
    </div>
  );
};
