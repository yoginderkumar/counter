import React from "react";

import "./App.css";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  state = {
    counter: 0,
  };

  incrementButton = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementButton = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        hello
        <ChildComponent counter={this.state.counter} />
        <button onClick={this.incrementButton}>+</button>
        <button onClick={this.decrementButton}>-</button>

      </div>
    );
  }
}

export default App;
