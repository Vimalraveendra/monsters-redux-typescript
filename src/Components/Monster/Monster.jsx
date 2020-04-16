import React from "react";
import "./Monster.css";

const Monster = ({ id, name, email }) => {
  return (
    <div className="monster-container">
      <div>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="monsters"
        />
      </div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Monster;
