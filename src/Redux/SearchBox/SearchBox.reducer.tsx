import searchBoxActionTypes, { ISearchField } from "./SearchBox.types";

const initialState: ISearchField = {
  searchField: ""
};

export const searchChange = (state = initialState, action = {}) => {
  switch (action.type) {
    case searchBoxActionTypes.SEARCHFIELD_CHANGE:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};
