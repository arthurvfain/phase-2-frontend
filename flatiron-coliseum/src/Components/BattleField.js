import React from "react"
import { useState } from "react"
import { Route, Switch, Link } from 'react-router-dom'
import {Grid} from '@material-ui/core'
import BattlerCard from "./BattlerCard"
import Fight from "./Fight"
import Victory from "./Victory"

function BattleField({ warriors, setWarriors }) {

    const [twoBattlers, setTwoBattlers] = useState([])

let battlers = []

    function battle(e)
    {   
        battlers = (warriors.splice(0,2))
        // removeWarriors(battlers)
        setTwoBattlers(battlers)
        // displayBattle(battlers)
        console.log(battlers)
    } 

// function removeWarriors(battlers){
//     let removed = warriors.filter(element=>element.name !== battlers[0].name|| element.name !== battlers[1].name)
//     setWarriors(removed)
    
// }

function displayBattle(battlers)
{
    let twoCards = battlers.map(battler => 
            <Grid item xs={12} sm={6} key={battler.name}>
                <BattlerCard name={battler.name} id={parseFloat(battler.url.slice(34))} position={battlers.indexOf(battler)} />
            </Grid>
    )
    return(twoCards)
}

    return (
        <div>
            <h1>BattleField</h1>
            
            <Link onClick={battle} to='/Fight' exact>Get Ready !</Link>
            <Switch>
                <Route path="/Fight" component={()=><Fight contestants={displayBattle(twoBattlers)}/>}/>
                <Route path="/Victory" component={()=><Victory />}/>
            </Switch>
            {/* {twoBattlers.length >= 2 ?  : <h1>Upcoming Battle</h1> } */}
        </div>
    )
}

export default BattleField