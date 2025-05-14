import { createSlice } from "@reduxjs/toolkit";
import { getAllBannerApi } from "../api/banner";

const bannerSlice = createSlice({
    name:"banner",
    initialState:{
        banner: null,
        loading: false,
        error:null
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllBannerApi.pending, (state)=>{
            state.loading = true
        })
        .addCase(getAllBannerApi.fulfilled, (state, action)=>{
            state.loading = false
            state.banner = action.payload
        })
        .addCase(getAllBannerApi.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default bannerSlice.reducer