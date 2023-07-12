import axios from "axios";

export const FetchProductsApi = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const AddProductsApi = (data) => {
  return axios.post("https://fakestoreapi.com/products", data);
};
