import monstersActionTypes from "./Monsters.types";

export const requestMonsters = () => dispatch => {
  dispatch({
    type: monstersActionTypes.REQUEST_MONSTERS_PENDING
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: monstersActionTypes.REQUEST_MONSTERS_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: monstersActionTypes.REQUEST_MONSTERS_FAILED,
        payload: error
      })
    );
};
