import { useState } from "react"
import './form-registration.css'





export function FormRegistration(){



const [name, setName] = useState(0);
const [surname, setSurname] = useState(0);
const [email, setEmail] = useState(0);

function onChangeName(e){
  setName(e.target.value)
}

function onChangeSurname(e) {
  setSurname(e.target.value)
}

function onChangeEmail(e) {
  setEmail(e.target.value)
}

function onHandleReset() {
  setName(0);
  setSurname(0);
  setEmail(0); 
}

function onSubmit(){
  alert(`Welcome ${name} ${surname} :)`)

}


  return(
   <form onSubmit={onSubmit} className="form-wrapper">
    <input onChange={onChangeName} className="input" placeholder="Name" type="text"/>
    <input onChange={onChangeSurname} className="input" placeholder="Surname" type="text" />
    <input onChange={onChangeEmail} className="input" placeholder="Email" type="email"/>

    <button type="reset" onClick={onHandleReset} className="reset-button">Reset</button>
    <button type="submit" className="form-button">Get started</button>  

  </form>
   

   
  )
}