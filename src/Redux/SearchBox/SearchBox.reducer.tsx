import {
  ISearchText,
  SEARCHFIELD_CHANGE,
  searchBoxActionTypes
} from "./SearchBox.types";
import { ThunkDispatch } from "redux-thunk";
import { searchBoxActionTypes } from "../../Redux/SearchBox/SearchBox.types";
// the first thing to  do  create type for the initial state or the default state.
// you have to make sure to import the types from the searchBox types.
const initialState: ISearchText = {
  searchField: ""
};

//Here we need to do two things , the first thing is to do a type
// for the actions for that we need to import searchBoxActionsTypes.
// seconde thing is to do a type for the return type as well
// in here we return the searchField  so here we need to say ISearchText.
export const searchChange = (
  state = initialState,
  action: searchBoxActionTypes
): ISearchText => {
  switch (action.type) {
    case SEARCHFIELD_CHANGE:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};
