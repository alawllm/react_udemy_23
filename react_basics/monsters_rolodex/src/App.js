import { Component } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  //constructor method will run before anything else
  constructor() {
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
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchField) })

    return (
      < div className="App" >
        <h1 className="app-title">Kitties Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='search monsters' />
        <CardList monsters={filteredMonsters} />
      </div >
    )
  }
}


export default App;
