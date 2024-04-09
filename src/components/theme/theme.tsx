import { useContext, useLayoutEffect} from "react"
import { ThemeContext } from "../../context/theme.context"
import './theme.css'
import { useLocalStorage } from "../../shared"
export function Theme(){

const {theme, setTheme} = useContext(ThemeContext)
const [themeStorage, setThemeStorage] = useLocalStorage<'light' | 'dark'>('theme', 'light')

useLayoutEffect(() => {
  const root = window.document.documentElement
  root.setAttribute('theme', themeStorage)
}, [themeStorage])

const changeTheme = () => {
  setThemeStorage(themeStorage === 'light' ? 'dark' : 'light')
}

  return(
    <ThemeContext.Provider value={{ theme, setTheme}}>
     <button className='theme-icon' onClick={changeTheme}>
    <span>{themeStorage}</span>
    </button>
    </ThemeContext.Provider>
  
  )
  }