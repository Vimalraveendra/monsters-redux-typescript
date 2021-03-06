// Describing the shape of the monsters  slice of state
export interface IMonstersState {
  id: number;
  name: string;
  email: string;
}

export interface IMonsters {
  monsters: Array<IMonstersState>;
  isPending: boolean;
  error: string;
}

export const REQUEST_MONSTERS_PENDING = " REQUEST_MONSTERS_PENDING";
export const REQUEST_MONSTERS_SUCCESS = "  REQUEST_MONSTERS_SUCCESS";
export const REQUEST_MONSTERS_FAILED = " REQUEST_MONSTERS_FAILED";

// so we are exporting each actions in typescript format

interface monstersPendingAction {
  type: typeof REQUEST_MONSTERS_PENDING;
}
interface monstersSuccessAction {
  type: typeof REQUEST_MONSTERS_SUCCESS;
  payload: Array<IMonstersState>;
}

interface monstersFailedAction {
  type: typeof REQUEST_MONSTERS_FAILED;
  payload: string;
}
// here we making the aggregation all these typescript actions
// for that I am using the union operator or OR  operator.
export type monstersActionTypes =
  | monstersPendingAction
  | monstersSuccessAction
  | monstersFailedAction;
