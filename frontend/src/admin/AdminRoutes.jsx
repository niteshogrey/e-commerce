import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminLayout />} >
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='products' element={<Products/>} />
        </Route>
    </Routes>
  )
}

export default AdminRoutes