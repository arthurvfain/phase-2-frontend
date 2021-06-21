
import '../../src/App.css';
import PokemonContainer from './PokemonContainer';
import { useState, useEffect } from 'react'

function App()
{
  const [pokeList, setPokeList] = useState([])

  useEffect (()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50").then(r=>r.json()).then(data=>setPokeList(data))
  },[])


while (pokeList.length === 0) 
 {
  return <img src='https://wallpaperaccess.com/full/215986.jpg' />
}
{
  return (
    <div className="App">
          <PokemonContainer pokeList={pokeList}/>
    </div>
  );
}

}
export default App;
