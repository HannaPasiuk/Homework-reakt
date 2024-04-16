import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeContextProvider} from './context/theme.context'
import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/auth.context.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      
    <ThemeContextProvider>
      <BrowserRouter>
      <AuthProvider>
    <App/>
    </AuthProvider>
       </BrowserRouter>
    </ThemeContextProvider>
 
  </React.StrictMode>,
)
