import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext"
import GenericButton from "./GenericButton";
const PlayerStatusList = () => {
  const { players, putItem } = useContext(PlayerContext);
  const navigate = useNavigate()
  const{gameNumber}= useParams();
  useEffect(() => {
    if(gameNumber>3)navigate("/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = () =>
    players.map((player, index) => (
      <tr key={`Player${index}`}>
        <td><Link to={`/players/${player._id}`}>{player.name}</Link></td>
        <td>
          <GenericButton
            message={"Playing"}
            typeStyle={player[`game${gameNumber}`]==="Playing"?"danger":"secondary"}
            action={() => {putItem(player._id,{...player,[`game${gameNumber}`]:"Playing"})}}
          />
          <GenericButton
            message={"Not Playing"}
            typeStyle={player[`game${gameNumber}`]==="Not Playing"?"success":"secondary"}
            action={() =>putItem(player._id,{...player,[`game${gameNumber}`]:"Not Playing"})}
          />
          <GenericButton
            message={"Undecided"}
            typeStyle={player[`game${gameNumber}`]==="Undecided"?"warning":"secondary"}
            action={() =>putItem(player._id,{...player,[`game${gameNumber}`]:"Undecided"})}
          />
        </td>
      </tr>
    ));
  return (
    <table className="table container text-center" style={{ width: "30rem" }}>
      <thead>
        <tr>
          <th scope="col">Team Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{renderItem()}</tbody>
    </table>
  );
}
export default PlayerStatusList;