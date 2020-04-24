import { SEARCHFIELD_CHANGE, searchBoxActionTypes } from "./SearchBox.types";
import { ChangeEvent } from "react";

// TypeScript infers that this function is returning SearchChangeAction.
// in here we need to do two things  one is the type of the parameter
// and the  second one is the return type for each one of these(in our
//case it is the searcnBoxActionTypes ie SEARCHFIELD_CHANGE)
// so here searchBoxActionTypes  represents all the possible actions
// that redux store can take place

export const searchChange = (
  event: ChangeEvent<HTMLInputElement>
): searchBoxActionTypes => {
  return {
    type: SEARCHFIELD_CHANGE,
    payload: event
  };
};
