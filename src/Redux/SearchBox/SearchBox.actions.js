import searchBoxActionTypes from "./SearchBox.types";

export const searchChange = event => ({
  type: searchBoxActionTypes.SEARCHFIELD_CHANGE,
  payload: event
});
