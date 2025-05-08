import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoryApi } from "../api/categoryApi";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        category: null,
        loading: false,
        error:null
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCategoryApi.pending, (state)=>{
            state.loading = true
        })
        .addCase(getAllCategoryApi.fulfilled, (state, action)=>{
            state.loading = false
            state.category = action.payload
        })
        .addCase(getAllCategoryApi.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default categorySlice.reducer