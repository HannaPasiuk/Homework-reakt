import './notFound.css'
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
const navigate = useNavigate()

 navigate('/')
  return (
    <>
      <h1 className="not-found">404</h1>
      <div className="not-found text">this page does not exist</div>
      <button className="btn" onClick={() => navigate(-1)}>&larr; back</button>
      </>
  )
}