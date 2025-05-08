import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import bannerReducer from "./slices/bannerSlice"
import categoryReducer from "./slices/categorySlice"


const store = configureStore({
    reducer:{
        auth: authReducer,
        banner: bannerReducer,
        category: categoryReducer
    }
})

export default store