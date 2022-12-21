import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { router } from './routes/router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
