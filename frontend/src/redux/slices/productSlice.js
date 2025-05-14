import { createSlice } from "@reduxjs/toolkit";
import { getAllProductApi, getProductById } from "../api/productApi";

const productSlice = createSlice({
    name:"product",
    initialState:{
        product: null,
        loading: false,
        error:null
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProductApi.pending, (state)=>{
            state.loading = true
        })
        .addCase(getAllProductApi.fulfilled, (state, action)=>{
            state.loading = false
            state.product = action.payload
        })
        .addCase(getAllProductApi.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(getProductById.pending, (state)=>{
            state.loading = true
        })
        .addCase(getProductById.fulfilled, (state, action)=>{
            state.loading = false
            state.product = action.payload
        })
        .addCase(getProductById.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default productSlice.reducer