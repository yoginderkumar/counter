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
      <div className="App" style={{border : "1px solid black"}}>
       <ChildComponent counter={this.state.counter}/>
       <button style={{marginRight:"50px",fontSize:"30px", borderRadius:"10px"}} onClick={this.decrementButton}>-</button>{/* <ChildComponent counter={this.state.counter} /> */}
       <button style={{fontSize:"30px" , borderRadius:"10px"}} onClick={this.incrementButton}>+</button>
      </div>
    );
  }
}

export default App;
