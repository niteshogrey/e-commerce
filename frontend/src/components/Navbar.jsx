import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Search, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { CircleUserRound } from "lucide-react";
import Cart from "../pages/Cart";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const dispatch = useDispatch();
  const username = JSON.parse(localStorage.getItem("user"));
  console.log(username);

  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="h-16 shadow-xl flex items-center px-12 justify-evenly z-10">
      <div>
        <img src="./logo.png" className="h-15 w-15" />
      </div>
      <div className="flex h-11 w-80">
        <input
          type="text"
          className="border rounded-l-full w-full pl-3"
          placeholder="Search here..."
        />
        <button className="bg-blue-800 px-3 text-white text-center rounded-r-full">
          <Search />
        </button>
      </div>
      <nav className="flex gap-6  font-semibold">
        <Link
          to={"/"}
          key="home"
          className={`${active === "home" && "underline text-blue-500"}  `}
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          key="product"
          className={`${active === "product" && "underline text-blue-500"} `}
          onClick={() => setActive("product")}
        >
          Product
        </Link>
        <Link
          to={"/categories"}
          key="Category"
          className={`${active === "Category" && "underline text-blue-500"} `}
          onClick={() => setActive("Category")}
        >
          Category
        </Link>
        <Link
          key="about"
          className={`${active === "about" && "underline text-blue-500"} `}
          onClick={() => setActive("about")}
        >
          About
        </Link>
        <Link
          key="contact_us"
          className={`${
            active === "contact_us" && "underline text-blue-500"
          }  `}
          onClick={() => setActive("contact_us")}
        >
          Contact us
        </Link>
      </nav>
      <button
        className="flex gap-2 font-semibold cursor-pointer "
        onClick={() => setOpenCart(true)}
      >
        <ShoppingCart size={25} />
        Cart
      </button>
      <div className="flex gap-5">
        <p className="flex items-center font-semibold gap-2">
          <CircleUserRound /> {username.firstname}
        </p>
        <button
          onClick={() => dispatch(logout())}
          className="flex text items-center gap-2 bg-red-700 text-white font-semibold px-2 py-1 rounded-full cursor-pointer"
        >
          Sign Out
          <LogOut />
        </button>
      </div>

      {openCart && (
        <>
          <div className="fixed inset-0 bg-black/75 z-20"></div>
          <div>
            <Cart onClose={()=>setOpenCart(false)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
