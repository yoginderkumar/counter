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
    this.setState(({ counter: this.state.counter - 1 }));
  }


  colorChange = () => {

    const countValue = document.getElementById('count');
    // if (this.state.counter === 0) {
    //   countValue.style.color = 'red'
    // }

    if (this.state.counter > 0) {
      countValue.style.color = '#6c5ce7'
    }
    if (this.state.counter < 0) {
      countValue.style.color = '#d63031'

    }


  }


  render() {
    return (
      <div className="App">
        {/* <ChildComponent counter={this.state.counter} /> */}
        <div className="counter">
          <button onClick={this.decrementButton}>Decrement</button>

          <h1 id="count" style={{color: this.state.counter > 0 ? '#6c5ce7' : this.state.counter === 0 ? 'grey' : '#d63031'}}>{this.state.counter}</h1>
          <button onClick={this.incrementButton}>Increment</button>

        </div>
      </div>
    );
  }
}

export default App;
