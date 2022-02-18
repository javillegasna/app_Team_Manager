import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PlayerState from "./contexts/PlayerState";
import AddPlayer from "./views/AddPlayer";
import DetailPlayer from "./views/DetailPlayer";
import Main from "./views/Main";
import PayerStatus from "./views/PlayerStatus";
function App() {
  return (
    <BrowserRouter>
      <PlayerState>
        <Routes>
          <Route path="/" element={<Navigate to ={"/players/list"} />} />
          <Route path="/players/list" element={<Main />} />
          <Route path="/players/addplayer" element={<AddPlayer />} />
          <Route path="/players/:id" element={<DetailPlayer />} />
          <Route path="/status/game/:gameNumber" element={<PayerStatus/>} />
        </Routes>
      </PlayerState>
    </BrowserRouter>
  );
}

export default App;
