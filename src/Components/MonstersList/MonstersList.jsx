import React from "react";
import Monster from "../Monster/Monster";
import "./Monster.css";
import { connect } from "react-redux";

const MonstersList = ({ monsters, searchField }) => {
  // if  you filter the monsters in the reducer,state monsters array items
  // so each consecutive search is performed  on the previously filtered
  //value. so you are losing the original copy of your monsters array.

  //inorder  to address this issue  best place to filter the monsters array is inside
  // the components .so that it will not upadate the monsters array

  monsters = monsters.filter(monster =>
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

const mapStateToProps = ({
  monstersArray: { monsters },
  searchText: { searchField }
}) => ({
  monsters,
  searchField
});

export default connect(mapStateToProps)(MonstersList);
