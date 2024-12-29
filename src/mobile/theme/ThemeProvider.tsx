import React, { createContext, useContext } from 'react';

interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  border: string;
}

interface ThemeContextType {
  colors: ThemeColors;
}

const defaultTheme: ThemeContextType = {
  colors: {
    primary: '#ea580c', // orange-600
    background: '#f1f5f9', // slate-100
    text: '#0f172a', // slate-900
    border: '#e2e8f0', // slate-200
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);