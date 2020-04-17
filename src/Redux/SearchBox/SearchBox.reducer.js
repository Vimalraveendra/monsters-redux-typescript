import searchBoxActionTypes from "./SearchBox.types";

const initialState = {
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
