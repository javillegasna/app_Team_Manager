import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container">
      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/players/list"}>
            List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/players/addplayer"}>
            Add Player
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
