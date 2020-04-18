import React from "react";

import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MonstersList from "../Components/MonstersList/MonstersList";
import { connect } from "react-redux";
import { requestMonsters } from "../Redux/Monsters/Monsters.Actions";

class App extends React.Component {
  // filteredMonsters = () => {
  //   return this.props.monsters.filter(monster => {
  //     return monster.name
  //       .toLowerCase()
  //       .includes(this.props.searchField.toLowerCase());
  //   });
  // };
  componentDidMount() {
    this.props.requestMonsters();
  }
  render() {
    return (
      <div className="App">
        <h1>Monsters List</h1>
        <SearchBox />
        <MonstersList />
      </div>
    );
  }
}
const mapStateToProps = ({ monstersArray: { monsters, searchField } }) => ({
  searchField,
  monsters
});
const mapDispatchToProps = dispatch => ({
  requestMonsters: () => dispatch(requestMonsters())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
