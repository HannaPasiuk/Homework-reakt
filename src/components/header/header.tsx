import { Menu } from "../menu";
import { Theme } from "../theme/theme";
import './header.css'
export function Header(){
  return(
    <>
    <div className='header'>
      <Theme/>
      <Menu/>
    </div>
    </>
  )
}