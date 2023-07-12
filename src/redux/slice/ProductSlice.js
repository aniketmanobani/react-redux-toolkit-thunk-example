import { createSlice } from "@reduxjs/toolkit";
import {
  AddProductsAsync,
  FetchProductsAsync,
} from "../middleware/ProductMiddleware";

const initialState = {
  products: [],
  isLoading: false,
  status: "idle", // idle, loading, success, failed
  error: null,
  addProduct: {
    isLoading: false,
    status: "idle",
    error: null,
    data: null,
  },
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
    resetAddProduct(state) {
      return {
        ...state,
        addProduct: {
          isLoading: false,
          status: "idle",
          error: null,
          data: null,
        },
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

    // add product
    builder.addCase(AddProductsAsync.pending, (state) => {
      state.addProduct.data = null;
      state.addProduct.error = null;
      state.addProduct.isLoading = true;
      state.addProduct.status = "pending";
    });

    builder.addCase(AddProductsAsync.fulfilled, (state, action) => {
      state.addProduct.data = action.payload;
      state.addProduct.error = null;
      state.addProduct.isLoading = false;
      state.addProduct.status = "success";
    });
    builder.addCase(AddProductsAsync.rejected, (state, action) => {
      state.addProduct.data = null;
      state.addProduct.error = action.payload;
      state.addProduct.isLoading = false;
      state.addProduct.status = "rejected";
    });
  },
});

export const ProductSliceActions = ProductSlice.actions;

export default ProductSlice.reducer;
