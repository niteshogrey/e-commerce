import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryApi } from '../redux/api/categoryApi';
import { getAllProductApi, getProductByCategoryId } from '../redux/api/productApi';

const CategoryHeader = () => {
      const { category, loading } = useSelector((state) => state.category);
  console.log(category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoryApi());
  }, [dispatch]);


  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!category || category.length === 0) {
    return <p className="text-center text-xl">No banners available</p>;
  }

  return (
    <div className='h-10 bg-blue-400 items-center flex gap-8 flex-wrap justify-center'>
         <p 
                className='font-semibold cursor-pointer  hover:scale-105 hover:font-bold transition' 
                onClick={()=> dispatch(getAllProductApi())}
                >All</p>
        {
            category.map((item, index)=>(
                <p 
                key={index} 
                className='font-semibold cursor-pointer  hover:scale-105 hover:font-bold transition' 
                onClick={()=> dispatch(getProductByCategoryId( item._id))}
                >{item.name}</p>
            ))
        }
    </div>
  )
}

export default CategoryHeader