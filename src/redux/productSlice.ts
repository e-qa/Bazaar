import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: [rate: number, count: number];
}

interface State {
  products: Product[];
  productsDetail: Product[];
}

const initialState: State = {
  products: [],
  productsDetail: [],
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axiosInstance("/");
  return response.data;
});

export const getProductsById = createAsyncThunk(
  "getProductsById",
  async (id: string) => {
    const response = await axiosInstance(`/${id}`);
    return response.data;
  }
);

export const getProductsByCategory = createAsyncThunk(
  "getProductsByCategory",
  async (category: string) => {
    const response = await axiosInstance(`/category/${category}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductsById.fulfilled, (state, action) => {
      state.productsDetail = action.payload;
    });
  },
});

export default productsSlice.reducer;
