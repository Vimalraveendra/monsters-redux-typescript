import {
  SearchField,
  SEARCHFIELD_CHANGE,
  searchBoxActionTypes
} from "./SearchBox.types";

const initialState: SearchField = {
  searchField: ""
};

export const searchChange = (
  state = initialState,
  action: searchBoxActionTypes
): SearchField => {
  console.log("serr", action.payload);
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
