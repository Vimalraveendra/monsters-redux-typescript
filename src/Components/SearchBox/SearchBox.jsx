import React from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { searchChange } from "../../Redux/SearchBox/SearchBox.actions";

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

const mapStateToProps = ({ searchText: { searchField } }) => ({
  searchField
});
const mapDispatchToProps = dispatch => ({
  searchChange: event => dispatch(searchChange(event.target.value))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
