import React from "react";

import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MonstersList from "../Components/MonstersList/MonstersList";
import { connect } from "react-redux";
import { requestMonsters } from "../Redux/Monsters/Monsters.Actions";

class App extends React.Component {
  // state = {
  //   monsters: [],
  //   searchField: ""
  // };
  // onSearchChange = event => {
  //   this.setState({
  //     searchField: event.target.value
  //   });
  // };

  filteredMonsters = () => {
    return this.state.monsters.filter(monster => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
  };
  componentDidMount() {
    this.props.requestMonsters();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Monsters List</h1>
        <SearchBox />
        <MonstersList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}
const mapStateToProps = ({
  searchText: { searchField },
  monstersArray: { monsters }
}) => ({
  searchField,
  monsters
});
const mapDispatchToProps = dispatch => ({
  requestMonsters: () => dispatch(requestMonsters())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
