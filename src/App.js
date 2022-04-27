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
    this.setState(({ counter: this.state.counter - 1 }));
  }

  getValue(e){
      console.log(e.target.value)
      // this.setState({counter:e.target.value})
      this.setState({counter:Number(e.target.value)})
  }


  render() {
    return (
      <div>
        <ChildComponent/>
        {/* <div className="counter">  */}
          {/* <button onClick={this.decrementButton}>Decrement</button> */}
          {/* <h1 id="count" style={{color: this.state.counter > 0 ? '#6c5ce7' : this.state.counter === 0 ? 'grey' : '#d63031'}}>{this.state.counter}</h1> */}
          {/* <input  type="number" value={this.state.counter} onChange={this.getValue}/> */}
          {/* <button onClick={this.incrementButton}>Increment</button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
