import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProductsAsync } from "../redux/middleware/ProductMiddleware";
import { ProductSliceActions } from "../redux/slice/ProductSlice";

function Products() {
  const isLoading = useSelector((state) => state.Products.isLoading);
  const products = useSelector((state) => state.Products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const c = dispatch(FetchProductsAsync());

    return () => c.abort();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button
          onClick={() => {
            dispatch(ProductSliceActions.resetProucts());
          }}
        >
          Reset
        </button>
      </div>
      <div>
        {isLoading && <h1>Product is Loading...</h1>}
        {products.map((m) => (
          <div>
            <div>
              <h2>{m.title}</h2>
            </div>
            <div>
              <h3>{m.price}</h3>
            </div>
            <div>
              <h4>{m.desc}</h4>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
