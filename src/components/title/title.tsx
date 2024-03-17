export function Title({ children } : { children: string}){
return(
  <>
   <div className='block-title'>
          <h2 className='title'>{children}</h2>
          </div>  
  </>
)
}
