import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');//[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  //fetch inside of useEffect - will run only when the values inside of the array change
  //if we dont want to trigger this callback ever again, the array should remain empty
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  //monsters should be filtered only when searchField or monsters change
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchField) })
    setFilterMonsters(newFilteredMonsters)
  }, [searchField, monsters])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (< div className="App" >
    <h1 className="app-title">Kitties Rolodex</h1>
    <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='search monsters' />
    <CardList monsters={filteredMonsters} />
  </div >)
}


export default App;
