import React from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { searchChange } from "../../Redux/Monsters/Monsters.Actions";
// import { filteredMonsters } from "../../Redux/Monsters/Monsters.Actions";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

// const mapStateToProps = ({ monstersArray: { searchField } }) => ({
//   searchField
// });
const mapDispatchToProps = dispatch => ({
  searchChange: event => dispatch(searchChange(event.target.value))
});
export default connect(null, mapDispatchToProps)(SearchBox);
