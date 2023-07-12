import axios from "axios";

export const FetchProductsApi = () => {
  return axios.get("https://fakestoreapi.com/products");
};
