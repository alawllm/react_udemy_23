import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  //constructor method will run before anything else
  constructor() {
    console.log('constructor')
    super();
    //initializing state 
    //state - always json object
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  //will run the first time the component will be rendered
  componentDidMount() {
    console.log('componentDidMount')
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

  //function not inside of the state - not re-initialized every time, 
  //makes the function more efficient
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchField) })

    return (
      <div className="App">
        { /* //input field with onChange event handler */}
        <input className="search-box" type="search" placeholder="search monsters" onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => { return <div key={monster.id}><h1>{monster.name}</h1></div> })

        }

      </div >
    )
  }
}


export default App;
