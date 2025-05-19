import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../apiHandler";

export const getAllProductApi = createAsyncThunk(
  "fetch/product",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${api}/product/`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

export const getProductById = createAsyncThunk(
  "fetch/product-by-id",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const res = await axios.get(`${api}/product/get/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

export const getProductByCategoryId = createAsyncThunk(
  "fetch/product-by-categoryId",
  async (id, { rejectWithValue }) => {
    try {
      console.log("Category ID:", id);
      const res = await axios.get(`${api}/product/get/by-category/${id}`);
      console.log("Response Data:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch products");
    }
  }
);
