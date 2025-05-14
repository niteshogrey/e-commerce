import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../apiHandler";

export const getAllCategoryApi = createAsyncThunk("fetch/category", async(_, {rejectWithValue})=>{
    try {
        const res = await axios.get(`${api}/category`)
        console.log(res.data);
        
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Login failed"); 
    }
})

