import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBannerApi } from "../redux/api/banner";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const { banner, loading } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 2000;

  // Fetch banners on mount
  useEffect(() => {
    dispatch(getAllBannerApi());
  }, [dispatch]);

  // Handle auto sliding
  useEffect(() => {
    if (!autoSlide || !banner || banner.length === 0) return;
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (banner.length > 0 ? (prev + 1) % banner.length : 0));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, banner]);

  // Slide controls
  const nextSlide = () => {
    if (!banner || banner.length === 0) return;
    setCurrent((prev) => (prev + 1) % banner.length);
  };

  const prevSlide = () => {
    if (!banner || banner.length === 0) return;
    setCurrent((prev) => (prev === 0 ? banner.length - 1 : prev - 1));
  };

  // Loading and empty state handling
  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!banner || banner.length === 0) {
    return <p className="text-center text-xl">No banners available</p>;
  }

  return (
    <div className="main relative flex items-center h-[60vh] w-full sm:h-[60vh]  md:h-[90vh]  lg:h-[60vh] overflow-hidden">
      {/* Banner Images */}
      <div className="images h-full w-full overflow-hidden">
        {banner.map((item, index) =>
          current === index ? (
            <img
              key={index}
              src={item.imageUrl}
              className="h-full w-full object-fill"
              alt={item.title || "Banner"}
            />
          ) : null
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons absolute flex justify-between items-center h-full w-full text-white">
        <button
          onClick={prevSlide}
          className="left-arrow bg-black/70 py-5 px-2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="right-arrow bg-black/70 py-5 px-2"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute flex gap-2 items-center bottom-3 left-1/2 -translate-x-1/2">
        {banner.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-3 h-3 bg-white rounded-full ${
              current === i ? "p-2" : "opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

