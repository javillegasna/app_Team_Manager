import { Link } from "react-router-dom";
import icoDelete from "../assets/trash-can-solid.svg";
import icoEdit from "../assets/pen-clip-solid.svg";
import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";
import IconButton from "./IconButton";
const ProductList = () => {
  const { products, deleteItem } = useContext(ProductsContext);
  return (
    <ol className="container list-group" style={{ width: "22rem" }}>
      {products.map((product, index) => (
        <li className=" list-group-item text-center" key={`product${index}`}>
          <div className="input-group">
            <Link className="input-group-text" to={`/${product._id}`}>
              <div style={{ width: "180px" }}>{product.title}</div>
            </Link>
            <Link to={`/${product._id}/edit`}>
              <IconButton icon={icoEdit} typeStyle={"success"} />
            </Link>
            <IconButton
              icon={icoDelete}
              typeStyle={"danger"}
              action={() => deleteItem(product._id)}
            />
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ProductList;
