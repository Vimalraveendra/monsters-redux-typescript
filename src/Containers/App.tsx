import React from "react";
import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MonstersList from "../Components/MonstersList/MonstersList";
import { connect } from "react-redux";
import { requestMonsters } from "../Redux/Monsters/Monsters.Actions";
import { ThunkDispatch } from "redux-thunk";
import { monstersActionTypes } from "../Redux/Monsters/Monsters.types";

interface IAppProps {}
interface IAppState {}
class App extends React.Component<IAppProps, IAppState> {
  componentDidMount(): void {
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

interface LinkDispatchToProps {
  requestMonsters: () => void;
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, monstersActionTypes>
) => ({
  requestMonsters: () => dispatch(requestMonsters())
});

export default connect(null, mapDispatchToProps)(App);
