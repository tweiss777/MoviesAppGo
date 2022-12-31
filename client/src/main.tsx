import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import Login from './Pages/Login'
import './index.css'
import DashBoard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import {
  BrowserRouter,
  Route,
  Routes
}
  from 'react-router-dom'

import AuthenticationProvider from './context/AuthenticationContext'
import ProtectedRoute from './Components/ProtectedRoute'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <AuthenticationProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            } />
            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
          </Routes>
        </AuthenticationProvider>
      </CookiesProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
