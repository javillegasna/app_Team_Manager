import  axios  from "axios";
import { useState } from "react";
import API_URL from "../utils/constants";
import ProductsContext from "./ProductsContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  //http actions
  const deleteItem = (id) => {
    axios
      .delete(`${API_URL}/product/${id}`)
      .then((res) =>
        setProducts(products.filter((product) => res.data._id !== product._id))
      )
      .catch();
  };
  const getItems=(set)=>{
    axios
      .get(`${API_URL}/product/`)
      .then((res) => {
        set(res.data.product);
      })
      .catch((err) => console.log(err));
  }
  const getItem=(id,set)=>{
    axios
      .get(`${API_URL}/product/${id}`)
      .then((res) => {
        set(res.data.product);
      })
      .catch((err) => console.log(err));
  }
  const postItem=(data,dispatch)=>{
    axios
      .post(`${API_URL}/product/`,data)
      .then((res) => {
        const { product } = res.data;
        setProducts([product, ...products]);
      })
      .catch((err)=>handlerError(err.response.data,dispatch));
  }
  const putItem=(id,data,dispatch)=>{
    axios
    .put(`${API_URL}/product/${id}`,data)
    .then((res) => {
      const { product } = res.data;
      const filteredItems=products.filter((product) => res.data._id !== product._id)
      setProducts([product, ...filteredItems]);
    })
    .catch((err)=>handlerError(err.response.data,dispatch));
  }
  //Controllers
  const handlerError = (dataError,dispatch) => {
    const { errors } = dataError.data;
    const ErrorsTags = Object.keys(errors);
    ErrorsTags.map((errorTag) => dispatch(errorTag, true));
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        deleteItem,
        getItems,
        getItem,
        postItem,
        putItem
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductState;