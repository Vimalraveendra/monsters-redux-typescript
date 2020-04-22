import React from "react";
import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MonstersList from "../Components/MonstersList/MonstersList";
import { connect } from "react-redux";
import { requestMonsters } from "../Redux/Monsters/Monsters.Actions";

interface IAppProps {}
interface IAppState {}
class App extends React.Component<IAppProps, IAppState> {
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

const mapDispatchToProps = dispatch => ({
  requestMonsters: () => dispatch(requestMonsters())
});

export default connect(null, mapDispatchToProps)(App);
