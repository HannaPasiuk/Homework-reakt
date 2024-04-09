import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme : 'light', 
  setTheme : () => {},
})

export function ThemeContextProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState( 'light')
 
  return (
    <ThemeContext.Provider value={{ theme, setTheme : () => setTheme(theme === 'light' ? 'dark' : 'light')}}>
      {children}
    </ThemeContext.Provider>
  )
}