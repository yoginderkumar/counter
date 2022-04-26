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

  render() {
    return (
      <div className="App">
        Hello
        <ChildComponent counter={this.state.counter} />
        <button onClick={this.incrementButton}>Update</button>
      </div>
    );
  }
}

export default App;
