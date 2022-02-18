import { NavLink, useParams } from "react-router-dom";
import PlayerStatusList from "../Components/PlayerStatusList";
import Header from "../layout/Header";

const PayerStatus = () => {
  const{gameNumber}=useParams()
  return (
    <>
      <h1 className="text-center">Player Status - Game {gameNumber}</h1>
      <Header />
      <div>
        <nav className="container">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <NavLink className="nav-link" to={"/status/game/1"}>
                Game 1
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/status/game/2"}>
                Game 2
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/status/game/3"}>
                Game 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <PlayerStatusList />
      </div>
    </>
  );
};

export default PayerStatus;
