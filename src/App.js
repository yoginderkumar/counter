import React from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  state = {
    counter: 0,
  };
  // getValue(event) {
  //   this.setState({counter:event.target.value});
  //   }

  incrementButton = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementButton = () => {
    this.setState({ counter: this.state.counter - 1 });
  };



  render() {
    return (
      <div className="App" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        
        
       <button style={{fontSize:"30px", borderRadius:"10px"}} onClick={this.decrementButton}>-</button>
       {/* <input type="text" onChange={(e)=>{console.log(e.target.value)}} /> */}
       <h1 style={{padding:"20px"}}>{this.state.counter}</h1>
       <button style={{fontSize:"30px" , borderRadius:"10px"}} onClick={this.incrementButton}>+</button>
      </div>
    );
  }
}

export default App;
