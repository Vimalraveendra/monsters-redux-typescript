import {
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./Monsters.types";

const initialState = {
  isPending: false,
  monsters: []
};

export const searchMonsters = (state = initialState, action = {}) => {
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
