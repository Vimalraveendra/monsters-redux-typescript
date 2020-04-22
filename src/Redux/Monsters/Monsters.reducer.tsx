import {
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED,
  IMonsters,
  IMonstersState,
  monstersActionTypes
} from "./Monsters.types";

// the first thing to  do  create type for the initial state or the default state.
// you have to make sure to import the types from the searchBox types.
const initialState: IMonsters = {
  isPending: false,
  monsters: [],
  error: ""
};

//Here we need to do two things , the first thing is to do a type
// for the actions for that we need to import monsterActionsTypes.
// seconde thing is to do a type for the return type as well
// in here we return the searchField  so here we need to say ISearchText.
export const searchMonsters = (
  state = initialState,
  action: monstersActionTypes
): IMonsters => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_MONSTERS_SUCCESS:
      return {
        ...state,
        isPending: false,
        monsters: action.payload
      };
    case REQUEST_MONSTERS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
