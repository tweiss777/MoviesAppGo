import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { router } from './routes/router'
import { RouterProvider } from 'react-router-dom'
import AuthenticationProvider from './context/AuthenticationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>
  </React.StrictMode>,
)
