import React from "react";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";
import Users from "./components/Users";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      {/* <Profile /> */}
      {/* <Users /> */}
      {/* <Products /> */}
      <AddProduct />
    </>
  );
}

export default App;
