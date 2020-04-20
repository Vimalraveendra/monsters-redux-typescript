// Describing the shape of the searchField  slice of state
export interface ISearchField {
  searchField: string;
}

// Describing the different ACTION NAMES available
// const searchBoxActionTypes = {
//   SEARCHFIELD_CHANGE: "SEARCHFIELD_CHANGE"
// };
export const SEARCHFIELD_CHANGE = "SEARCHFIELD_CHANGE";

interface SearchChangeAction {
  type: typeof SEARCHFIELD_CHANGE;
  payload: ISearchField;
}

export type searchBoxActionTypes = SearchChangeAction;
