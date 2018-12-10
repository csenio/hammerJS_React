import React, { Component } from "react";
import Hammer from "react-hammerjs";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleSwipe = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/second" />;
    }

    return (
      <Hammer onSwipeLeft={this.handleSwipe}>
        <div>
          <h2>Home</h2>
        </div>
      </Hammer>
    );
  }
}

export default Home;
