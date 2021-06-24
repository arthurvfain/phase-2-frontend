import React from "react"
import {  useEffect } from "react"
import { Route, Switch, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Fight from "./Fight"
import Victory from "./Victory"

function BattleField({battlers, warriors, pokeList, setPokemon, winner}) {

    let battlerz = []

    function battle()
    {   
        battlerz = (warriors.splice(0,2))
        setPokemon({battlers: battlerz, warriors:[...warriors],pokeList:[...pokeList]})
    } 

    useEffect (()=>{
        if (winner) {
            let daWinna={name: winner[0].name, url:winner[0].url, battleTime:Date.now() }  
            fetch('http://localhost:3000/battles',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(daWinna)
            })
        }
    },[winner])
    
    return (
        <div>
            <h1>BattleField</h1>
            {warriors.length >= 2 ? <Button component={Link} onClick={battle} to="/Fight" variant="contained" color="primary">Get Ready !</Button> : ''}
            <Switch>
                <Route path="/Fight" component={()=><Fight contestants={battlers} pokeList={pokeList} warriors={warriors} setPokemon={setPokemon} />}/>
                <Route path="/Victory" component={()=><Victory winner={winner[0]}/>}/>
            </Switch>
        </div>
    )
}

export default BattleField