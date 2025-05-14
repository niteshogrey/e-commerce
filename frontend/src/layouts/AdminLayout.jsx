import React from 'react'
import Sidebar from '../admin/components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../admin/components/Header'

const AdminLayout = () => {
  return (
    <div>
        <Sidebar/>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout