import {
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED,
  monstersActionTypes
} from "./Monsters.types";
import { Dispatch } from "redux";

export const requestMonsters = () => (
  dispatch: Dispatch<monstersActionTypes>
) => {
  dispatch({
    type: REQUEST_MONSTERS_PENDING
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: REQUEST_MONSTERS_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: REQUEST_MONSTERS_FAILED,
        payload: error
      })
    );
};
