import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddProductsApi, FetchProductsApi } from "../api/ProductApi";

export const FetchProductsAsync = createAsyncThunk("Product/list", async () => {
  const result = await FetchProductsApi();
  return result.data;
});

export const AddProductsAsync = createAsyncThunk(
  "Product/add",
  async (data) => {
    const result = await AddProductsApi(data);
    return result.data;
  }
);
