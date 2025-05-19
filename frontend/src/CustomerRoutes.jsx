import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerLayout from './layouts/CustomerLayout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AllProducts from './pages/AllProducts'

const CustomerRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CustomerLayout />} >
            <Route index element={<Home/>}  />
            <Route path='product-details/:id' element={<ProductDetail />} />
            <Route path='products' element={<AllProducts />} />
        </Route>
    </Routes>
  )
}

export default CustomerRoutes