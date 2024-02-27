import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
    }
  }
  incrementCount=()=>{
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
  }
  decrementCount = ()=>{
    this.setState((prevState)=>({
      count:prevState.count-1
    }))
  }
  render(){
    return (
      <div className="App">
       <h2>Counter App</h2>
       <p>Count: {this.state.count}</p>
       <button onClick={this.incrementCount}>Increment</button>
       <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
 
}

export default App;
