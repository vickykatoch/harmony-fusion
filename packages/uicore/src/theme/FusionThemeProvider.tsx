import { SaltProviderNext } from '@salt-ds/core';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useFusionTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useFusionTheme must be used within a FusionThemeProvider');
  }
  return context;
};
interface Props {
  children: ReactNode;
  theme?: 'light' | 'dark';
}
export const FusionThemeProvider = ({ children, theme }: Props) => {
  const [currentTheme, setTheme] = useState<'light' | 'dark'>(theme || 'dark');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const setThemeValue = useCallback((theme: 'light' | 'dark') => {
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, setTheme: setThemeValue }}>
      <SaltProviderNext
        density="medium"
        mode={currentTheme}
        applyClassesTo="root"
        accent="teal"
        corner="rounded"
        headingFont="Amplitude"
        actionFont="Amplitude"
      >
        {children}
      </SaltProviderNext>
    </ThemeContext.Provider>
  );
};
