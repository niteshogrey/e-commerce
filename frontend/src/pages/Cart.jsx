import { X } from "lucide-react";
import empty_cart from "../assets/empty-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../redux/api/cartApi";

const Cart = ({ onClose }) => {

    const {cart, loading} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    console.log(cart);

    useEffect(()=>{
        dispatch(getCart())
    },[dispatch])
    

  return (
    <div className="fixed right-0 top-0 bg-white h-screen w-[30vw] z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-3xl">Shopping Cart</h3>
        <button type="button" onClick={onClose} className="cursor-pointer">
          <X size={30} />
        </button>
      </div>

      <div className=" flex flex-col text-center">
        <img src={empty_cart} alt="" className="h-[90%] w-[90%]" />
        <h3 className="text-2xl mt-5">Unfortunately, Your Cart is Empty</h3>
        <p className="my-4">Please add something in your cart</p>
        <a
          href="/"
          className="bg-blue-500 px-4 py-2 text-white font-semibold w-fit m-auto rounded"
        >
          Continue Shoping
        </a>
      </div>

    </div>
  );
};

export default Cart;
