import { Menu } from "../../components/menu";
import { Theme } from "../../components/theme/theme";
import { NavLink } from "react-router-dom";
import './header.css'
export function Header(){
  return(
    <>
    <div className='header'>
      <Theme/>
      <div className="nav-wrapper">
      <ol className="navigation">
        <li>
          <NavLink to='/'>Welcome</NavLink>
        </li>
        <li>
        <NavLink to='/registration'>Registration</NavLink>
        </li>
        <li>
        <NavLink to='/about'>About</NavLink>
        </li>
      </ol>
      </div> 
      <Menu/>
      </div> 
    </>
  )
}