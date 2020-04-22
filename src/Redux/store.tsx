import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import { monstersActionTypes } from "./Monsters/Monsters.types";

const middlewares = [logger, thunkMiddleware];

// here we are grabbing all the types from different reducers.
export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
