import React, { useContext, useEffect } from "react";
import PlayerList from "../Components/PlayerList";
import PlayerContext from "../contexts/PlayerContext";
import Header from "../layout/Header";
import Nav from "../layout/Nav";

const Main = () => {
  const {setPlayers, getItems } = useContext(PlayerContext);
  useEffect(() => {
    getItems(setPlayers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
