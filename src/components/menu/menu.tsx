import { useState } from 'react'
import './menu.css'


const states = [{id: 1, isState: true}]

export function Menu(){
 
  const [state, setState] = useState(states)
  const onHandlerClick = () => {
    const newState = state.map(state => {
     if(state.id === state.id){
       return {
         ...state,
          isState: !state.isState
       }
     }
     return state
    })
    setState(newState)
   }
   
   
   
   return( 
   
     <>
     {state.map((state) => {
       return (
         <button key={state.id} className='btn-state' onClick={() => onHandlerClick()}>{
         state.isState?
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
        
       )
     })}
     </>  
     )
}

export default Menu