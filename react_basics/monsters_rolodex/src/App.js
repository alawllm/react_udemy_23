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
      monsters: [

      ]
    }
  }

  //will run the first time the component will be rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      //every .then that returns a value returns another promise
      //response is being returned from .then
      .then((response) => response.json())
      //what has been returned is being passed to users
      //setting state
      .then((users) => this.setState(() => { return { monsters: users } },
        () => {
          console.log(this.state)
        }
      ))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => { return <div key={monster.id}><h1>{monster.name}</h1></div> })
        }
      </div >
    )
  }
}


export default App;
