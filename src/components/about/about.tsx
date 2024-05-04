import { useEffect, useState } from "react"


export const About = () => {

  const defoltValue: [] = []
  const [users, setUsers] = useState(defoltValue)

  const getApiData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/'
    ).then(response => response.json())  

     setUsers(response)
  }

  useEffect(() =>{
    getApiData()
  }, [])
 
const usersMap = users.map((user : {id: number, name: string}) => {
  return <ol className='item-comteiner' key={user.id + user.name}>
      User{user.id}. 

      name: {user.name}
      
        
  </ol>
})

  return (
    <div className='app'>
   {usersMap}
    </div>
  )
}