import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./rootReducer";
import { monstersActionTypes } from "./Monsters/Monsters.types";

// here we are grabbing all the types from different reducers.
export type AppState = ReturnType<typeof rootReducer>;
// in store little alteration is needed do to thunk piece so instead
// of just specifying thunk hera, we are going to do thunk as thunkMiddlewar
//here type as means new type assertion. thunkMiddleware comes from
// redux-thunk library, this is going to take two parameters , one is the
// AppState and the other one is the Appactions in our case it is
// monstersActionTypes
const middlewares = [
  logger,
  thunk as ThunkMiddleware<AppState, monstersActionTypes>
];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
