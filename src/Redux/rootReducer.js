import { combineReducers } from "redux";
import { searchChange } from "./SearchBox/SearchBox.reducer";
import { searchMonsters } from "./Monsters/Monsters.reducer";

export default combineReducers({
  searchText: searchChange,
  monstersArray: searchMonsters
});
