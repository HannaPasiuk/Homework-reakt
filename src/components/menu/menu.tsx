import { useState } from 'react'
import './menu.css'

export function Menu(){
 
  const [state, setState] = useState(true)
  const onHandlerClick = () => {
   setState(!state)
   }
   
   return( 
     <>
         <button className='btn-state' onClick={() => onHandlerClick()}>{
         state ?
         <div className='close'>
           <span className='line-open'></span>
           <span className='line-open'></span>
           <span className='line-open'></span>
           </div> : 
           <div className='open'>
             <span className='line-close line1'></span>
             <span className='line-close line2'></span>
             </div>}
             </button>
     </>  
     )
}

export default Menu