import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryApi } from "../redux/api/categoryApi";

const Category = () => {
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
    <div className="mt-5 p-5 bg-white">
      <div>
        <h3 className="text-3xl font-semibold">Categories</h3>
      </div>
      <div className="flex gap-8 mt-9 overflow-x-auto scrollbar-hide p-1">
        {category.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-center bg-white rounded-full h-30 w-30 border shadow-md shrink-0 cursor-pointer hover:text-[#00f7ff] 
      hover:shadow-[0_0_5px_rgba(57,255,20,0.8),0_0_10px_rgba(57,255,200,0.9)] transition"
          >
            <img src={item.icon} className="h-15" alt={item.name} />
            <p className="font-semibold text-center mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
