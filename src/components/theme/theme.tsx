import { useContext} from "react"
import { ThemeContext } from "../../context/theme.context"
import './theme.css'
export function Theme(){
 const {theme, setTheme} = useContext(ThemeContext)

 function onClickTheme(){
  setTheme()
  if(theme === 'light'){
    document.documentElement.setAttribute('theme', 'dark')
  }else{
    document.documentElement.setAttribute('theme', 'light')
  }
 }
  return(
    <button className='theme-icon' onClick={onClickTheme}>
      <span>{theme}</span>
    </button>
  )
  }