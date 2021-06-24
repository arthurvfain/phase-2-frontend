import { Route, Switch, NavLink } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { useState, useEffect } from 'react'
import BattleField from './BattleField';
import PokemonContainer from './PokemonContainer';
import Warriors from './Warriors';
import Button from '@material-ui/core/Button';

function Coliseum()
{
    const[pokemon, setPokemon] = useState({battlers:[],warriors:[],pokeList:[], winner:[]})

    useEffect (()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then(r=>r.json()).then(data=>setPokemon({battlers:[],warriors:[],pokeList: data.results}))
    },[])

    function selectWarrior (name)
    {
        let selectedWarrior = pokemon.pokeList.filter(element => element.name === name)
        let warriorList = [...pokemon.warriors, selectedWarrior[0]]
        let removedFromCollection = pokemon.pokeList.filter(element=>element.name !== name)
        setPokemon({battlers:[],warriors:[...warriorList],pokeList:[...removedFromCollection]})
    }

    function returnHome(name)
    {
        let remaining = pokemon.warriors.filter(element=>element.name !== name)
        let removedCard = pokemon.warriors.filter(element=>  element.name === name)
        setPokemon({battlers:[],warriors:[...remaining],pokeList:[...pokemon.pokeList, removedCard[0]]})
    }
    
    while (pokemon.pokeList.length === 0) 
    {
        return <img src='https://wallpaperaccess.com/full/215986.jpg' width="600" height="500" alt="splash screen" />
    }
    
    return (
        <div>
            <nav>
                <Button component={NavLink} to='/BattleField' exact variant="contained" color="primary">To BattleField</Button>
                <Button component={NavLink} to='/PokemonContainer' exact variant="contained" color="primary">Choose Your Warriors</Button>
            </nav>
            <Warriors warriors={pokemon.warriors} pokeList={pokemon.pokeList} returnHome={returnHome} />
            <Switch>
                <Route path='/BattleField' component={() =><Router><BattleField winner={pokemon.winner} battlers={pokemon.battlers} warriors={pokemon.warriors} pokeList={pokemon.pokeList} setPokemon={setPokemon}/></Router>}/>
                <Route path='/PokemonContainer' component={()=> <PokemonContainer pokeList={pokemon.pokeList} warriors={pokemon.warriors} selectWarrior={selectWarrior}/>} />
            </Switch>
        </div>
    )
}

export default Coliseum