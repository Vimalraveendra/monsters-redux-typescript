import monstersActionTypes from "./Monsters.types";
import { filterMonsters } from "./Monster.utils";

const initialState = {
  isPending: false,
  monsters: [],
  searchField: ""
};

export const searchMonsters = (state = initialState, action = {}) => {
  console.log("actop", action.payload);
  switch (action.type) {
    case monstersActionTypes.REQUEST_MONSTERS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case monstersActionTypes.REQUEST_MONSTERS_SUCCESS:
      return {
        ...state,
        isPending: false,
        monsters: action.payload
      };
    case monstersActionTypes.REQUEST_MONSTERS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case monstersActionTypes.SEARCHFIELD_CHANGE:
      return {
        ...state,
        searchField: action.payload,
        monsters: filterMonsters(state.monsters, action.payload)
      };

    default:
      return state;
  }
};
