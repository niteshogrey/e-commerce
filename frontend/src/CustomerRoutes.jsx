import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerLayout from './layouts/CustomerLayout'
import Home from './pages/Home'

const CustomerRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CustomerLayout />} >
            <Route index element={<Home/>}  />
        </Route>
    </Routes>
  )
}

export default CustomerRoutes