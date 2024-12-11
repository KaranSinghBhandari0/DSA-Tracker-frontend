import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { AuthProvider } from './context/Authcontext'
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext'

export default function App() {
  return (
    <>
      <div className='main'>
        <AuthProvider>
          <UserProvider>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </UserProvider>
        </AuthProvider>
      </div>

      <div className="alert-msg">
        <p> <i className="fa-solid fa-triangle-exclamation"></i> The Website is made only for desktops</p>
      </div>
    </>
  )
}
