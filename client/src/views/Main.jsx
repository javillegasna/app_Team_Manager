import React, { useContext, useEffect } from "react";
import ProductFrm from "../Components/ProductFrm";
import ProductList from "../Components/ProductList";
import ProductsContext from "../contexts/ProductsContext";

const Main = () => {
  const { products, setProducts, getItems } = useContext(ProductsContext);
  useEffect(() => {
    getItems(setProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);
  return (
    <>
      <ProductFrm />
      <hr />
      <ProductList />
    </>
  );
};

export default Main;
