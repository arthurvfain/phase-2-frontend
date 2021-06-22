
import '../App.css';
import PokemonContainer from './PokemonContainer';
import { useState, useEffect } from 'react'
import BattleField from './BattleField';
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Warriors from "./Warriors";

function App()
{
  const [pokeList, setPokeList] = useState([])
  const [warriors, setWarriors] = useState([])
  
  useEffect (()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then(r=>r.json()).then(data=>setPokeList(data))
  },[])


  function selectWarrior (name) {
    let selectedWarrior = pokeList.results.filter(element => element.name === name)
    let warriorList = [...warriors, selectedWarrior]
    setWarriors(warriorList)
    console.log(warriors)

  }

  while (pokeList.length === 0) 
  {
    return <img src='https://wallpaperaccess.com/full/215986.jpg' alt="splash screen" />
  }
  return (
    <div className="App">
      <Header />
      <Warriors warriors={warriors} pokeList={pokeList}/>
      <Switch>
          <Route path='/BattleField' component={() => <BattleField />}/>
          <Route path='/PokemonContainer' component={()=> <PokemonContainer pokeList={pokeList} selectWarrior={selectWarrior}/>} />
      </Switch>
    </div>
  );

}

export default App;
