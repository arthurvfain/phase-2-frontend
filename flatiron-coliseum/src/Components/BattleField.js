import React from "react"
import { useState } from "react"
import BattlerCard from "./BattlerCard"
import {Grid} from '@material-ui/core'

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
                <BattlerCard name={battler.name} id={parseFloat(battler.url.slice(34))} />
            </Grid>
    )
    return(twoCards)
}

    return (
        <div>
            <h1>BattleField</h1>
            <button onClick={battle}>Battle!</button>
            {twoBattlers.length >= 2 ? 
                        <Grid container spacing={2}>
                            {displayBattle(twoBattlers)}
                        </Grid>
                : <h1>Upcoming Battle</h1> }
        </div>
    )
}

export default BattleField