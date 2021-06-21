
import '../../src/App.css';
import PokemonContainer from './PokemonContainer';
import { useState, useEffect } from 'react'

function App()
{
  const [pokeList, setPokeList] = useState([])
  const [filterInput, setFilterInput] = useState('')

  useEffect (()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(r=>r.json()).then(data=>setPokeList(data))
  },[])

  function handleSearch (e) {
    setFilterInput(e.target.value)
  }

  // let filterList = pokeList.results.filter(element => element.name.toLowerCase().includes(filterInput.toLowerCase()))

while (pokeList.length === 0) 
 {
  return <img src='https://wallpaperaccess.com/full/215986.jpg' />
}
{
  return (
    <div className="App">
          <PokemonContainer pokeList={pokeList} filterInput={filterInput} handleSearch={handleSearch}/>
    </div>
  );
}
}

export default App;
