import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../apiHandler";

export const getAllBannerApi = createAsyncThunk("fetch/banner", async(_, {rejectWithValue})=>{
    try {
        const res = await axios.get(`${api}/banner/`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Login failed");
        
    }
})

