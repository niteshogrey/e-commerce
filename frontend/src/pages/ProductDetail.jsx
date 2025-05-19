import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/api/productApi';
import CategoryHeader from '../components/CategoryHeader';
import Button from '../components/atoms/Button';
import { ShoppingCart } from 'lucide-react';
import { Zap } from 'lucide-react';
import { addToCart } from '../redux/api/cartApi';

const ProductDetail = () => {
    const {id}  = useParams()
    console.log(id);

    const {product} = useSelector((state) => state.product)
    console.log(product);
    const dispatch = useDispatch()

    useEffect(()=>{
        if (id) {
            dispatch(getProductById(id))
        }
    },[id, dispatch])  
    
     const handleAddToCart = () => {
    dispatch(addToCart({ product_id: product._id, quantity: 1 }));
  };
    
  return (
    <div>
        <CategoryHeader/>
        <div className='flex bg-gray-200 h-[85vh]  px-10'>
            <div className='h-[80vh] w-full bg-white border-r border-gray-200'>
                <div className='flex justify-center items-center py-5' >
                    <img src={product.image_url} className='h-[65vh]' alt="" srcset="" />
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Button className={"bg-amber-500 w-45 py-2 px-5 text-xl rounded"} icon={<ShoppingCart />} title={"Add to cart"} onClick={handleAddToCart} />
                    <Button className={"bg-orange-600 w-45 py-2 px-5 text-xl rounded"} icon={<Zap />} title={"Buy now"} />
                </div>
            </div>
            <div className='p-5 flex h-[80vh] w-full flex-col justify-start gap-10 bg-white'>
                <h1 className='text-5xl font-semibold'>{product.name}</h1>
                <tr className='text-4xl underline decoration-2 italic'>₹ {product.price}</tr>
                <p className='text-xl font-semibold text-gray-500'><span className='capitalize'>description:</span> {product.description}</p>

            </div>
        </div>
    </div>
  )
}

export default ProductDetail