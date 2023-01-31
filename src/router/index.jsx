import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'

import Dashboard from '@/components/organisms/Dashboard'

import Login from '@/components/pages/Login'
import Home from '@/components/pages/Home'
import User from '@/components/pages/User'
import Settings from '@/components/pages/Settings'

const PrivateRoute = ({ redirect, children }) => {
  const { user } = useAuthContext()
  return user ? children : <Navigate to={redirect} />
}

const Router = () => (
  <Routes>
    <Route
      element={
        <PrivateRoute redirect={'/login'}>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/settings' element={<Settings />} />
    </Route>
    <Route path='/login' element={<Login />} />
  </Routes>
)

export default Router
