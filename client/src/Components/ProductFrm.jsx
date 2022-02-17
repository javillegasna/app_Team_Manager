import { useContext, useEffect, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
const ProductFrm = () => {
  //Parameters URL
  const { id } = useParams();
  //Context
  const { getItem, postItem, putItem } = useContext(ProductsContext);
  //Estates
  const [title, setTitle] = useState("");
  const [errTitle, setErrTitle] = useState(false);
  const [price, setPrice] = useState("");
  const [errPrice, setErrPrice] = useState(false);
  const [description, setDescription] = useState("");
  //Utilities
  const setProduct = (product) => {
    setDescription(product.description || product);
    setPrice(product.price || product);
    setTitle(product.title || product);
  };
  const resetInputs = () => {
    const tags = ["title", "price"];
    tags.map((tag) => dispatchValidation(tag, false));
    setProduct("");
  };
  const dispatchValidation = (tag, value) => {
    switch (tag) {
      case "title":
        setErrTitle(value);
        break;
      case "price":
        setErrPrice(value);
        break;
      default:
        alert("unknown " + tag);
        break;
    }
  };
  //Effects
  useEffect(() => {
    if (id) {
      getItem(id, setProduct);
    }
  }, [id, getItem]);
  //Controllers
  const handlerOnChange = (value, tag, set) => {
    set(value);
    dispatchValidation(tag, value === "" ? true : false);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = { title, price, description };
    if (id && !errPrice && !errTitle) {
      putItem(id,data, dispatchValidation);
    } else if (!id) {
      postItem(data, dispatchValidation);
      resetInputs();
    }
  };

  return (
    <form
      className="container border border-primary rounded-3 mt-3"
      style={{ width: "20rem" }}
      onSubmit={handlerSubmit}
    >
      <fieldset>
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          className={`form-control ${errTitle && "border-danger"}`}
          type="text"
          name="title"
          id="title"
          onChange={(e) => handlerOnChange(e.target.value, "title", setTitle)}
          value={title}
        />
        {errTitle && <p className="text-danger">Title is required</p>}
      </fieldset>
      <fieldset>
        <label className="form-label" htmlFor="price">
          Price
        </label>
        <input
          className={`form-control ${errPrice && "border-danger"}`}
          type="number"
          step="0.01"
          name="price"
          id="price"
          onChange={(e) => handlerOnChange(e.target.value, "price", setPrice)}
          value={price}
        />
        {errPrice && <p className="text-danger">Price is required</p>}
      </fieldset>
      <fieldset>
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <textarea
          className="form-control mb-3"
          type="text-area"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </fieldset>
      <button className="btn btn-primary mb-3 container">
        {id ? "Update" : "Create"}
      </button>
    </form>
  );
};
export default ProductFrm;
