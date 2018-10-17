import React, { Component } from 'react';
import './App.css'

class App extends Component {
	
  state = {  
	  counter: 0
  }
  render() {
	  
    return (
	  <div  id="i">
		  <h1> Contatore: {this.state.counter}</h1>
			  <button onClick={() => this.setState({counter: this.state.counter + 1})}>
			  Incrementa
			  </button>
			  <button onClick={() => this.setState({counter: this.state.counter - 1})}>
			  Decrementa	
			  </button>
	  </div>
    );
  }
}

export default App; 