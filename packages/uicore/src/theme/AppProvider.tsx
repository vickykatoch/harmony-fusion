import { FusionThemeProvider } from './FusionThemeProvider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <FusionThemeProvider>{children}</FusionThemeProvider>;
};
