import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PlayerState from "./contexts/PlayerState";
import Main from "./views/Main";
function App() {
  return (
    <BrowserRouter>
      <PlayerState>
        <Routes>
          <Route path="/" element={<Navigate to ={"/player/list"} />} />
          <Route path="/player/list" element={<Main />} />
        </Routes>
      </PlayerState>
    </BrowserRouter>
  );
}

export default App;
