import React from "react";
import { Star } from "lucide-react";
import { Heart } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Sample Product Data



const ProductCard = ({ products }) => {
  console.log(products);
const navigate = useNavigate()
  const handleProductDetails = async(productId) =>{
    navigate(`/product-details/${productId}`)
  }
  
  // Calculate the average rating
  // const averageRating =
  //   product.reviews.reduce((sum, review) => sum + review.rating, 0) /
  //   product.reviews.length;

  return (
    <div 
    className="bg-white rounded-2xl shadow-md overflow-hidden w-64 m-5 hover:bg-gray-100 hover:scale-105 transition relative"
    onClick={()=>handleProductDetails(products._id)}
    >
      {/* Product Image */}
      <div className="absolute top-2 right-2">
         <Heart />
      </div>
      <img
        src={products.image_url}
        alt={products.name}
        className="w-full h-48 p-3 object-contain"
      />

      {/* Product Info */}
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-lg mb-1">{products.name}</h3>
        <p className="text-black mb-2 font-bold">₹ {products.price}</p>

        {/* Rating */}
        {/* <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className={
                index < Math.round(averageRating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews.length} reviews)
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
