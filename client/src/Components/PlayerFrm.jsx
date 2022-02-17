import { useContext, useState } from "react";
import ProductsContext from "../contexts/PlayerContext";
import { useParams } from "react-router-dom";
const PlayerFrm = () => {
  //Parameters URL
  const { id } = useParams();
  //Context
  const { postItem} = useContext(ProductsContext);
  //Estates
  const [player,setPlayer]=useState({name:"",position:"",Game1:"Undecided",Game2:"Undecided",Game3:"Undecided"});
  const [errors,setErrors]=useState({name:false,position:false,Game1:false,Game2:false,Game3:false})
  const [msgErrors,setMsgErrors]=useState({name:"Min 2 characters long",position:"",Game1:"Is required",Game2:"Is required",Game3:"Is required"})
  //Utilities
  const handlerSubmit = (e) => {
    e.preventDefault();
    postItem(player)
  };

  return (
    <form
      className="container border border-primary rounded-3 mt-3"
      style={{ width: "20rem" }}
      onSubmit={handlerSubmit}
    >
      <h2>Add Player</h2>
      <fieldset>
        <label className="form-label" htmlFor="title">
          Player Name:
        </label>
        <input
          className={`form-control ${errors.name && "border-danger"}`}
          type="text"
          name="name"
          id="name"
          onChange={(e) => {setPlayer({...player,name:e.target.value})}}
          value={player.name}
        />
        {errors.name && <p className="text-danger">Title is required</p>}
      </fieldset>

      <fieldset>
        <label className="form-label" htmlFor="price">
          Preferred Position:
        </label>
        <input
          className={`form-control ${errors.position && "border-danger"}`}
          type="text"
          name="position"
          id="position"
          onChange={(e) => {setPlayer({...player,position:e.target.value})}}
          value={player.position}
        />
      </fieldset>
      <button className="btn btn-primary mb-3 container">
        {id ? "Update" : "Create"}
      </button>
    </form>
  );
};
export default PlayerFrm;
