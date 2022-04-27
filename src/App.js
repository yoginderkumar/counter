import React from "react";

import "./App.css";

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

  handleCounterInputChange = (e) => {
    this.setState({ counter: Number(e.target.value) });
  };

  handleKeyDownOnInput = (e) => {
    switch (e.key) {
      case "Enter":
        this.decrementButton();
        break;
      case "Shift":
        this.incrementButton();
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="counter">
          <button onClick={this.decrementButton}>Decrement</button>
          <input
            value={this.state.counter}
            type="number"
            onKeyDown={this.handleKeyDownOnInput}
            onChange={this.handleCounterInputChange}
          />
          <button onClick={this.incrementButton}>Increment</button>
        </div>
        <div>Press "Shift" for Increment</div>
        <div>Press "Enter" for Decrement</div>
      </div>
    );
  }
}

export default App;
