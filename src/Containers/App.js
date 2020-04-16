import React from "react";

import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MonstersList from "../Components/MonstersList/MonstersList";

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ""
  };
  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    });
  };

  filteredMonsters = () => {
    return this.state.monsters.filter(monster => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Monsters List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <MonstersList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}

export default App;
