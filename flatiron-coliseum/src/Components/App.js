
import '../App.css';
import PokemonContainer from './PokemonContainer';
import { useState, useEffect } from 'react'
import BattleField from './BattleField';
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Warriors from "./Warriors";
import Home from "./Home"

function App()
{
  const [pokeList, setPokeList] = useState([])
  const [warriors, setWarriors] = useState([])
  
  useEffect (()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then(r=>r.json()).then(data=>setPokeList(data))
  },[])


  function selectWarrior (name) {
    let selectedWarrior = pokeList.results.filter(element => element.name === name)
    let warriorList = [...warriors, selectedWarrior[0]]
    setWarriors(warriorList)
  }

  while (pokeList.length === 0) 
  {
    return <img src='https://wallpaperaccess.com/full/215986.jpg' width="600" height="500" alt="splash screen" />
  }
  return (
    <div className="App">
      <Header />
      <Warriors warriors={warriors} pokeList={pokeList}/>
      <Switch>
          <Route path='/BattleField' component={() =><Router><BattleField warriors={warriors} setWarriors={setWarriors}/></Router>}/>
          <Route path='/PokemonContainer' component={()=> <PokemonContainer pokeList={pokeList} selectWarrior={selectWarrior}/>} />
          <Route exactPath='/' component={Home}/>
      </Switch>
    </div>
  );

}

export default App;
