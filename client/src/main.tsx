import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import { router } from './routes/router'
import { RouterProvider } from 'react-router-dom'
import AuthenticationProvider from './context/AuthenticationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthenticationProvider>
        <RouterProvider router={router} />
      </AuthenticationProvider>
    </CookiesProvider>
  </React.StrictMode>,
)
