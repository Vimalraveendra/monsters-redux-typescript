import searchBoxActionTypes from "./SearchBox.types";

export const searchChange = text => {
  return {
    type: searchBoxActionTypes.SEARCHFIELD_CHANGE,
    payload: text
  };
};
