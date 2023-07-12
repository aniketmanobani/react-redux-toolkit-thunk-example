import { createSlice } from "@reduxjs/toolkit";
import { FetchProductsAsync } from "../middleware/ProductMiddleware";

const initialState = {
  products: [],
  isLoading: false,
  status: "idle", // idle, loading, success, failed
  error: null,
};

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    resetProucts(state) {
      return {
        ...state,
        isLoading: false,
        status: "idle",
        error: null,
        products: [],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchProductsAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.status = "loading";
      state.products = [];
    });

    builder.addCase(FetchProductsAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.status = "success";
      state.products = action.payload;
    });

    builder.addCase(FetchProductsAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.status = "failed";
      state.products = [];
    });
  },
});

export const ProductSliceActions = ProductSlice.actions;

export default ProductSlice.reducer;
