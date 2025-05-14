import { createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => { 
      (state.user = null),
        (state.token = null),
        localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        (state.loading = false), (state.user = action.payload.user);
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerApi.fulfilled, (state, action) => {
        (state.loading = false), (state.user = action.payload);
      })
      .addCase(registerApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
