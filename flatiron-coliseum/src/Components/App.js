
import '../App.css';
import PokemonContainer from './PokemonContainer';
import { useState, useEffect } from 'react'
import BattleField from './BattleField';
import { Route, Switch } from 'react-router-dom'
import Header from './Header';

function App()
{
  const [pokeList, setPokeList] = useState([])
  
  useEffect (()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then(r=>r.json()).then(data=>setPokeList(data))
  },[])


  while (pokeList.length === 0) 
  {
    return <img src='https://wallpaperaccess.com/full/215986.jpg' alt="splash screen"/>
  }
  return (
    <div className="App">
      <Header />

      <Switch>
          <Route path='/BattleField' component={() => <BattleField />}/>
          <Route path='/PokemonContainer' component={()=> <PokemonContainer pokeList={pokeList}/>} />
      </Switch>
    </div>
  );

}

export default App;
