import searchBoxActionTypes from "./SearchBox.types";

export const searchChange = text => {
  console.log("text", text);
  return {
    type: searchBoxActionTypes.SEARCHFIELD_CHANGE,
    payload: text
  };
};
