import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { Search, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
    const [active, setActive] = useState("home")
    const dispatch = useDispatch()

  return (
    <div className='h-16 shadow-xl flex items-center px-12 justify-evenly'>
        <div>
            <img src="./logo.png" className='h-15 w-15' />
        </div>
        <div className='flex h-11 w-80'>
            <input type="text" className='border rounded-l-full w-full pl-3' placeholder='Search here...' />
            <button className='bg-blue-800 px-3 text-white text-center rounded-r-full'>
                <Search />
            </button>
        </div>
        <nav className='flex gap-6  font-semibold'>
            <Link to={"/customer"} key="home" className={`${active === "home" && "underline text-blue-500"}  `} onClick={()=>setActive("home")} >Home</Link>
            <Link to={"/customer/products"} key="product" className={`${active === "product" && "underline text-blue-500"} `} onClick={()=>setActive("product")} >Product</Link>
            <Link to={"/customer/categories"} key="Category" className={`${active === "Category" && "underline text-blue-500"} `} onClick={()=>setActive("Category")} >Category</Link>
            <Link key="about" className={`${active === "about" && "underline text-blue-500"} `} onClick={()=>setActive("about")}>About</Link>
            <Link key="contact_us" className={`${active === "contact_us" && "underline text-blue-500"}  `} onClick={()=>setActive("contact_us")}>Contact us</Link>
        </nav>
        <button className=''>
            <ShoppingCart size={30} />
        </button>
        <button onClick={()=>dispatch(logout())} className='flex text items-center gap-2 bg-red-700 text-white font-semibold px-2 py-1 rounded-full cursor-pointer'>
            Sign Out
            <LogOut />
        </button>
    </div>
  )
}

export default Navbar