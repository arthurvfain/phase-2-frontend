import React from "react"
import {  useEffect } from "react"
import { Route, Switch, Link } from 'react-router-dom'
import Fight from "./Fight"
import Victory from "./Victory"
import { Chip, Avatar } from '@material-ui/core';

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
            <h1 style={{fontFamily:'Cinzel'}}>BattleField</h1>
            {warriors.length >= 2 ? <Chip component={Link} onClick={battle} to='/Fight' exact label="Get Ready!" clickable color="primary" avatar={<Avatar alt="poke" src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png" />}/> : ''}
            <Switch>
                <Route path="/Fight" component={()=><Fight contestants={battlers} pokeList={pokeList} warriors={warriors} setPokemon={setPokemon} />}/>
                <Route path="/Victory" component={()=><Victory winner={winner[0]}/>}/>
            </Switch>
        </div>
    )
}

export default BattleField