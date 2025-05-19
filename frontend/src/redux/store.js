import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import bannerReducer from "./slices/bannerSlice"
import categoryReducer from "./slices/categorySlice"
import productReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"

const store = configureStore({
    reducer:{
        auth: authReducer,
        banner: bannerReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
    }
})

export default store