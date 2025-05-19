import React from 'react'
import {Link} from "react-router-dom"
import { LayoutDashboard } from 'lucide-react';
import { PackageOpen } from 'lucide-react';
import { User } from 'lucide-react';
import { LogOut } from 'lucide-react';
import {useDispatch} from "react-redux"
import { logout } from '../../redux/slices/authSlice';

const Sidebar = () => {
    const dispatch = useDispatch()
  return (
    <div className='w-[16vw] h-screen overflow-auto shadow flex flex-col items-center gap-15'>
        <div className='mt-3'>
            <img src='./logo.png' className='w-25' />
        </div>
        <nav className='flex flex-col w-full'>
            <Link className='py-4 pl-4 bg-gray-300 flex gap-2 text-xl items-center font-semibold'><LayoutDashboard/> Dashboard</Link>
            <Link to="/admin/products" className='py-4 pl-4 flex gap-2 text-xl items-center font-semibold'><PackageOpen/> Products</Link>
            <Link className='py-4 pl-4 flex gap-2 text-xl items-center font-semibold'><User/> Users</Link>
            <Link onClick={()=>dispatch(logout())} className='py-4 pl-4 flex gap-2 text-xl items-center font-semibold'><LogOut/> Sign out</Link>
        </nav>
    </div>
  )
}

export default Sidebar