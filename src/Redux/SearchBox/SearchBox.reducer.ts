import {
  ISearchText,
  SEARCHFIELD_CHANGE,
  searchBoxActionTypes
} from "./SearchBox.types";

// the first thing to  do  create type for the initial state or the default state.
// you have to make sure to import the types from the searchBox types.
const initialState: ISearchText = {
  searchField: ""
};
// now we are going to specify the types for  parameters & return reducer types.
//Here we need to do two things , the first thing is to do a type
// for the action for that we need to import searchBoxActionsTypes.
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
        searchField: action.payload.target.value
      };
    default:
      return state;
  }
};
