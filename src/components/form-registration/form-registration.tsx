import { ChangeEvent, useState } from "react"
import './form-registration.css'

export function FormRegistration() {


  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: ''
  })

  function onHandleReset() {
    setInputValue({
      name: '',
      email: '',
      password: ''
    })
  }

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }
 const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
  event.preventDefault()
  console.log(inputValue)
 }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className="form-wrapper">

      <input name="name"
        className="input"
        defaultValue={inputValue.name}
        placeholder="Enter your name"
        type="text" />
      <input name="email"
        className="input"
        defaultValue={inputValue.email}
        placeholder="Enter your surname"
        type="email" />
      <input name="password"
        className="input"
        defaultValue={inputValue.password}
        placeholder="Enter your password" type="password" />

      <button type="reset" onClick={onHandleReset} className="reset-button">Reset</button>
      <button type="submit" className="form-button">Get started</button>
    </form>
  )
}