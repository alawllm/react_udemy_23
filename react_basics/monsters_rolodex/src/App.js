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
      name: { firstName: 'Ala', lastName: 'Bebok' },
      company: 'ZTM'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I am {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({ name: { firstName: 'Andrei', lastName: 'Neagoie' }, company: 'McDonalds' })
            console.log(this.state)
          }}>Change name</button>
        </header>
      </div >
    )
  }
}


export default App;
