import { FormRegistration} from "./components"
import { Routes, Route } from "react-router-dom"
import { Welcome } from "./pages/welcome/welcome"
import { Layaut } from "./pages/layaut"
import { NotFound } from "./pages/notFound/notFound"
import { About } from "./components/about/about"
import { PrivateRoute } from "./pages/privateRoute"



export const App = () =>{
return(
  <>
   <Routes>
    <Route element={<Layaut/>}>

    <Route path='/' element={<Welcome/>}/>
    <Route path='/registration' element={<FormRegistration/>}/>

    <Route element={<PrivateRoute/>}>
         <Route path='/About' element={<About/>}/>
    </Route>

    <Route  path='*' element={<NotFound/>}/>
    </Route>
  </Routes>
  </>
)

}
export default App 
