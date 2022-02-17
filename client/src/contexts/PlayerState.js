import  axios  from "axios";
import { useState } from "react";
import API_URL from "../utils/constants";
import PlayersContext from "./PlayerContext";

const PlayerState = (props) => {
  const [players, setPlayers] = useState([]);
  //http actions
  const deleteItem = (id) => {
    axios
      .delete(`${API_URL}/player/${id}`)
      .then((res) =>
        setPlayers(players.filter((player) => res.data._id !== player._id))
      )
      .catch((err) => console.log(err));
  };
  const getItems=(set)=>{
    axios
      .get(`${API_URL}/player/`)
      .then((res) => {
        set(res.data.player);
      })
      .catch((err) => console.log(err));
  }
  const getItem=(id,set)=>{
    axios
      .get(`${API_URL}/player/${id}`)
      .then((res) => {
        set(res.data.player);
      })
      .catch((err) => console.log(err));
  }
  const postItem=(data)=>{
    axios
      .post(`${API_URL}/player/`,data)
      .then((res) => {
        const { player } = res.data;
        setPlayers([player, ...players]);
      })
      .catch((err)=>handlerError(err.response.data));
  }
  const putItem=(id,data)=>{
    axios
    .put(`${API_URL}/player/${id}`,data)
    .then((res) => {
      const { player } = res.data;
      const filteredItems=players.filter((player) => res.data._id !== player._id)
      setPlayers([player, ...filteredItems]);
    })
    .catch((err)=>handlerError(err.response.data));
  }
  //Controllers
  const handlerError = (dataError) => {
    const { errors } = dataError.data;
    console.log(errors);
    // const ErrorsTags = Object.keys(errors);
  };
  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
        deleteItem,
        getItems,
        getItem,
        postItem,
        putItem
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

export default PlayerState;