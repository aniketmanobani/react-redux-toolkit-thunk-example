import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProductsApi } from "../api/ProductApi";

export const FetchProductsAsync = createAsyncThunk("Product/list", async () => {
  const result = await FetchProductsApi();
  return result.data;
});
