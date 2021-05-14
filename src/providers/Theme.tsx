import React, { createContext, useEffect } from 'react';

export const ThemeContext = createContext({ toggleTheme: () => {} });

export const ThemeProvider: React.FC = ({ children }) => {
  const matchMediaPrefDark = window.matchMedia('(prefers-color-scheme: dark)');
  const html = document.querySelector('html');

  const toggleTheme = () => {
    if (html)
      html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  };

  useEffect(() => {
    if (html)
      html.dataset.theme = matchMediaPrefDark.matches ? 'dark' : 'light';

    const onSystemThemeChange = (e: any) => {
      const isDark = e.matches;
      const html = document.querySelector('html');
      if (html) html.dataset.theme = isDark ? 'dark' : 'light';
    };

    const startListeningToOSTheme = () => {
      matchMediaPrefDark.addEventListener('change', onSystemThemeChange);
    };

    const stopListeningToOSTheme = () => {
      matchMediaPrefDark.removeEventListener('change', onSystemThemeChange);
    };

    startListeningToOSTheme();

    return () => stopListeningToOSTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
