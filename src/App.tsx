import { useState } from 'react'

import './App.css'

const states = [{id: 1, isState: true}]

export function App(){
 
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
      <div>
       
       <div className='block-title'>
       <h2 className='title'>Sign In</h2>
       </div>

      <button className='btn-state' onClick={() => onHandlerClick()}>{
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
     </div> 
     
    )
  })}
  </>  
  )
}


export default App
