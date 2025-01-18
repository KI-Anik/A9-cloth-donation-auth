import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import AuthProvider from './components/provider/AuthProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
    position="top-center"
    autoClose={2000}
    closeOnClick={false}
    ></ToastContainer>
    <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
