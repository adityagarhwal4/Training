import { createContext } from "react"
import { theme } from "./theme"
type ThemeContextProviderProps = {
    children: React.ReactNode
}
export const ThemeContexts = createContext(theme);
export default function ThemeContext({children}: ThemeContextProviderProps) {
  return (
    <div>
        <ThemeContexts.Provider value={theme}>
            {children}
        </ThemeContexts.Provider>
    </div>
  )
}
