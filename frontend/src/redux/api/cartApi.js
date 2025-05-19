import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
    'cart/addToCart', async({ product_id, quantity }, { rejectWithValue }) =>{
         try {
      const response = await axios.post(
        'http://localhost:1000/api/v1/cart/add',
        { product_id, quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // or get from your auth state
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
    }
)

export const  getCart = createAsyncThunk("cart/get-cart", async(_, {rejectWithValue})=>{
try {
      const response = await axios.get(
        'http://localhost:1000/api/v1/cart',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // or get from your auth state
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
})