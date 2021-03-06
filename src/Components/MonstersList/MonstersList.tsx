import React from "react";
import Monster from "../Monster/Monster";
import "./MonsterList.css";
import { connect } from "react-redux";
import { IMonstersState } from "../../Redux/Monsters/Monsters.types";
import { AppState } from "../../Redux/store";

interface IMonstersProps {}
type Props = IMonstersProps & LinkStateToProps;

const MonstersList: React.FC<Props> = ({ monsters, searchField }) => {
  // if  you filter the monsters in the reducer,state monsters array items
  // so each consecutive search is performed  on the previously filtered
  //value. so you are losing the original copy of your monsters array.

  //inorder  to address this issue  best place to filter the monsters array is inside
  // the components .so that it will not upadate the monsters array

  monsters = monsters.filter((monster: IMonstersState) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="monsters-list">
      {monsters.map(monster => {
        return (
          <Monster
            key={monster.id}
            id={monster.id}
            name={monster.name}
            email={monster.email}
          />
        );
      })}
    </div>
  );
};
// here we need to specify the return type of  mapStateToProps.
interface LinkStateToProps {
  monsters: Array<IMonstersState>;
  searchField: string;
}

// here we are going to specify the  type for parameter state & return
// type of mapStateToProps.
const mapStateToProps = (state: AppState): LinkStateToProps => ({
  monsters: state.monstersArray.monsters,
  searchField: state.searchText.searchField
});

export default connect(mapStateToProps)(MonstersList);
