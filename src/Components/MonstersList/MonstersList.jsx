import React from "react";
import Monster from "../Monster/Monster";
import "./Monster.css";

const MonstersList = ({ monsters }) => {
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

export default MonstersList;
