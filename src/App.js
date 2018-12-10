import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SecondPage from "./components/SecondPage";
import Hammer from "react-hammerjs";

const handleTap = () => {
  console.log("tap");
};

// const handleSwipe = () => {
//   console.log("swipe");
// };

class App extends Component {
  // handleSwipe = () => {
  //   this.setState({ redirect: true });
  // };

  render() {
    return (
      <Hammer onTap={handleTap} onSwipe={this.handleSwipe}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/second" component={SecondPage} />
          </Switch>
        </div>
      </Hammer>
    );
  }
}

export default App;
