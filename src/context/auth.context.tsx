import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null)


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [auth, setAuth] = useState(false)

  
  const signIn = (auth: boolean, collback: () => void) => {
    setAuth(auth)
    collback()
  }

  const sigOut = (callback: () => void) => {
    setAuth(false)
    callback()
  }
 
  return (
  <AuthContext.Provider value={{
    auth,
    signIn,
    sigOut
  }}>
    {children}
   </AuthContext.Provider>
)
  
}