import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductsAsync } from "../redux/middleware/ProductMiddleware";

function AddProduct() {
  const [Products, setProducts] = useState({
    title: "",
    description: "",
    price: 0,
  });
  const addProduct = useSelector((state) => state.Products.addProduct);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log({ Products });
    dispatch(AddProductsAsync(Products));
  };

  const handleChange = (e) => {
    setProducts({ ...Products, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {addProduct.isLoading && <h1>Progress...</h1>}
      {addProduct.status === "success" && <h1>Product Added</h1>}
      <div>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description"
          name="description"
          title="description"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddProduct;
