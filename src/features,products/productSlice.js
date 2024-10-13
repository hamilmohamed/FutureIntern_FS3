import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetching = createAsyncThunk(
  "products/productsFetching",
  async () => {
    const res = await axios.get("https://gist.githubusercontent.com/Kaysanshaikh/7a55e2f015d6cd9c8989c76a09588e59/raw/1e0029ba5eed3f109161ef98819d79293676509d/db");
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetching.pending, (state, action) => {
      state.status = "Loading...";
    });
    builder.addCase(productsFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });
    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "Something went wrong!";
    });
  },
});

export default productsSlice.reducer;
