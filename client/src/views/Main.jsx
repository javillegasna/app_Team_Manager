import React, { useContext, useEffect } from "react";
import PlayerList from "../Components/PlayerList";
import PlayerContext from "../contexts/PlayerContext";
import Header from "../layout/Header";
import Nav from "../layout/Nav";

const Main = () => {
  const { players, setPlayers, getItems } = useContext(PlayerContext);
  useEffect(() => {
    getItems(setPlayers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(players);
  return (
    <main>
      <Header />
      <Nav />
      <hr />
      <PlayerList />
    </main>
  );
};

export default Main;
