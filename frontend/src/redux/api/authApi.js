import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
import { api } from "../../apiHandler";

export const loginApi = createAsyncThunk("auth/login", async(formData, {rejectWithValue})=>{
    try {
        const res = await axios.post(`${api}/user/login`, {
            mobile: formData.phone_number,
            password: formData.password
        })
        localStorage.setItem('token', res.data.token)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Login failed");
    }
})

export const registerApi = createAsyncThunk("auth/register", async(formData, {rejectWithValue})=>{
    try {
        const res = await axios.post(`${api}/user/register`, {
            firstName: formData.first_name,
            lastName: formData.last_name,
            mobile: formData.phone_number,
            email: formData.email,
            password: formData.password
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Login failed");
    }
})