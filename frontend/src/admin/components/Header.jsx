import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const { user } = useSelector((state) => state.auth)
    console.log(user);
    
  return (
    <header className='h-20 shadow fixed top-0 right-0 min-w-[84vw] max-w-screen'>

    </header>
  )
}

export default Header