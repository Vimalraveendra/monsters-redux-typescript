import React from "react";
import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MonstersList from "../Components/MonstersList/MonstersList";
import { connect } from "react-redux";
import { requestMonsters } from "../Redux/Monsters/Monsters.Actions";
import { ThunkDispatch } from "redux-thunk";
import { monstersActionTypes } from "../Redux/Monsters/Monsters.types";
import { bindActionCreators } from "redux";

interface IAppProps {}
interface IAppState {}

// here we are doing aggregation of all the props  types.
type Props = IAppProps & LinkDispatchToProps;

class App extends React.Component<Props, IAppState> {
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

// here we need to specify the return type of  mapDispatchToProps.
interface LinkDispatchToProps {
  // here requesMonsters is a funtion that  not taking paramter &
  // it returns void, thats what bascially dispatch returns.
  requestMonsters: () => void;
}
const mapDispatchToProps = (
  // normally we are using dispatch type, but here we are using thunk
  // so we are using ThunkDispatch.
  dispatch: ThunkDispatch<any, any, monstersActionTypes>,
  ownProps: IAppProps
  // here ownProps is the props of the App component in our case IAppProps
): LinkDispatchToProps => ({
  //bindActionCreators is when you want to pass some action creators
  // down to a component that isn't aware of Redux, and you don't want
  //to pass dispatch or the Redux store to it.
  requestMonsters: bindActionCreators(requestMonsters, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
