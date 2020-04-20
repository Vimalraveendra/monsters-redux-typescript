import monstersActionTypes from "./Monsters.types";

const initialState = {
  isPending: false,
  monsters: []
};

export const searchMonsters = (state = initialState, action = {}) => {
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
    default:
      return state;
  }
};
