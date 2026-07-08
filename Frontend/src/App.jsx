import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UsersignUp from './pages/UsersignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainLogout from "./pages/CaptainLogout";
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/user-signup' element={<UsersignUp />} />
          <Route path='/captain-login' element={<CaptainLogin />} />
          <Route path='/captain-signup' element={<CaptainSignup />} />
          <Route path = '/user-home' element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
          <Route path= "/user-logout" element= {<UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>}/> 

        <Route
              path="/captain-logout"
              element={
                <CaptainProtectWrapper>
                  <CaptainLogout />
                </CaptainProtectWrapper>
              }
            />

          <Route path = '/captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          } />
          
        </Routes>
    </div>
  )
}

export default App
