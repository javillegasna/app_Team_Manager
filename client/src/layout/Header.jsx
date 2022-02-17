import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to ={"/"}>
        <h2>Manage Players</h2>
      </NavLink>
      <NavLink to={"status/game/1"}>
        <h2>Manage Player Status</h2>
      </NavLink>
    </header>
  );
};
export default Header;
