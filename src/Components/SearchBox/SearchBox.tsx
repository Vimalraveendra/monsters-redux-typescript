import React, { ChangeEvent } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { searchChange } from "../../Redux/SearchBox/SearchBox.actions";
import { ThunkDispatch } from "redux-thunk";
import { searchBoxActionTypes } from "../../Redux/SearchBox/SearchBox.types";
import { bindActionCreators } from "redux";

interface SearchBoxProps {}

type Props = SearchBoxProps & LinkDispatchToProps;

const SearchBox: React.FC<Props> = ({ searchChange }) => {
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

interface LinkDispatchToProps {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, searchBoxActionTypes>
): LinkDispatchToProps => ({
  searchChange: bindActionCreators(searchChange, dispatch)
});
export default connect(null, mapDispatchToProps)(SearchBox);
