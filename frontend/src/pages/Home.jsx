import React from 'react'
import Carousel from '../ui/Carousel'
import Category from '../components/Category'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='bg-gray-200'>
      <Carousel/>
      <Category />
      <Products />
    </div>
  )
}

export default Home