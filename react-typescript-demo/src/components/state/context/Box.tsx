import { useContext } from "react"
import { ThemeContexts } from "./ThemeContext"
export default function Box(){
    const theme = useContext(ThemeContexts)
    return <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme Context</div>
}