import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to={"/"}>List</NavLink>
      <NavLink to={"/players/addplayer"}>Add Player</NavLink>
    </nav>
  );
};

export default Nav;
