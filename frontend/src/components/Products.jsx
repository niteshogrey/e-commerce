import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductApi } from "../redux/api/productApi";

const Products = () => {
  const { product, loading } = useSelector((state)=> state.product)
 console.log(product);
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getAllProductApi())
 },[dispatch])

   if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

    if (!product || product.length === 0) {
    return <p className="text-center text-xl">No banners available</p>;
  }
  return (
    <div div className="mt-5 bg-white p-5">
      <h3 className="text-3xl font-semibold">Products</h3>
      <div className="mt-6 flex flex-wrap justify-between">
        {
          product.map((item, index)=>(

            <ProductCard key={index} products={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
