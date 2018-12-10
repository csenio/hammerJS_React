import React, { Component } from "react";
import Hammer from "react-hammerjs";
import { Redirect } from "react-router-dom";

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleSwipe = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Hammer onSwipeRight={this.handleSwipe}>
        <div>
          <h2>Second</h2>
        </div>
      </Hammer>
    );
  }
}

export default SecondPage;
