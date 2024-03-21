import { useState } from "react"
import './form-registration.css'

export function FormRegistration(){

const [name, setName] = useState(0);
const [surname, setSurname] = useState(0);
const [email, setEmail] = useState(0);

function onHandleReset() {
  setName(0);
  setSurname(0);
  setEmail(0); 
}

  return(
   <form onSubmit={() => alert(`Welcome ${name} ${surname} :)`)} className="form-wrapper">

    <input onChange={e => setName(e.target.value)} className="input" placeholder="Name" type="text"/>
    <input onChange={e => setSurname(e.target.value)} className="input" placeholder="Surname" type="text" />
    <input onChange={e => setEmail(e.target.value)} className="input" placeholder="Email" type="email"/>

    <button type="reset" onClick={onHandleReset} className="reset-button">Reset</button>
    <button type="submit" className="form-button">Get started</button>  
  </form> 
  )
}