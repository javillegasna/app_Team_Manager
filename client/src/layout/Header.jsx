import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container text-center">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <h4>
            <NavLink to={"/"}>Manage Players</NavLink>
          </h4>
        </li>
        <li class="breadcrumb-item active">
          <h4>
            <NavLink to={"/status/game/1"}>Manage Player Status</NavLink>
          </h4>
        </li>
      </ol>
    </header>
  );
};
export default Header;
