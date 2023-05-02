import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  //constructor method will run before anything else
  constructor() {
    super();
    //initializing state 
    //state - always json object
    this.state = {
      name: 'Ala'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I am {this.state.name}
          </p>
          <button>Change name</button>
        </header>
      </div>
    )
  }
}


export default App;
