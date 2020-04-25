import {
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED,
  monstersActionTypes,
  IMonstersState
} from "./Monsters.types";
import { Dispatch } from "redux";
import { AppState } from "../store";

// here we are goint specify one thing i.e return action type because
//the requestMonstersPending is not taking any paramter
export const requestMonstersPending = (): monstersActionTypes => ({
  type: REQUEST_MONSTERS_PENDING
});

// now here we are going to specify the type of the parameter & the return action type
// here the type of data is typeof Arrayobject & return action is typeof REQUEST_MONSTERS_SUCCESS
export const requestMonstersSuccess = (
  data: Array<IMonstersState>
): monstersActionTypes => ({
  type: REQUEST_MONSTERS_SUCCESS,
  payload: data
});

export const requestMonstersFailed = (error: string): monstersActionTypes => ({
  type: REQUEST_MONSTERS_FAILED,
  payload: error
});

export const requestMonsters = () => (
  // inorder to hook the dispatch to typescript we can use Dispatch
  // types that comes from redux
  // Dispatch is going to take a parameter i.e our monstersActiontypes
  // which defines all the actions  that can take place in the redux store

  // Redux will passes two arguments to thunk functions, dispatch & getState
  //dispatch, so that they can dispatch new actions if they need to.
  // getState,they can access the current state, that represent the state
  // of redux store
  dispatch: Dispatch<monstersActionTypes>,
  getState: () => AppState
) => {
  dispatch(requestMonstersPending());
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch(requestMonstersSuccess(data)))
    .catch(error => dispatch(requestMonstersFailed(error)));
};
