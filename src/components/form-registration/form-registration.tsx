import { useContext} from "react"
import './form-registration.css'
import { AuthContext } from "../../context/auth.context"
import { useLocation, useNavigate } from "react-router-dom"


export const FormRegistration = () => {

  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const from = useLocation()
  const path = from.state?.from?.pathname || '/'
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  const data = new FormData(e.currentTarget)
    const name = data.get('name') as string
    const email = data.get('email') as string

     if(name && email) {
     signIn(!!name && !!email, () => navigate(path))
     }
console.log(data)
  }

  return (
    <form onSubmit={handleLogin} className="form-wrapper">
      <input name="name"
        className="input"
        placeholder="Enter your name"
        type="text" />

      <input name="email"
        className="input"
        placeholder="Enter your surname"
        type="email" />




      <button type="submit" className="form-button">Get started</button>
    </form>
  )
}