import React from "react"
import { useState } from "react"
import BattlerCard from "./BattlerCard"

function BattleField({ warriors, setWarriors }) {

    const [twoBattlers, setTwoBattlers] = useState([])

let battlers

    function battle(e)
    {   
        battlers = (warriors.splice(0,2))
        let removed = warriors.filter(element=>element.name !== battlers[0].name|| element.name !== battlers[1].name)
        setWarriors(removed)
        setTwoBattlers(battlers)
        
    } 
function displayBattle(battlers)
{
    let twoCards = battlers.map(battler => <BattlerCard name={battler.name} id={parseFloat(battler.url.slice(34))} />)
    return(twoCards)
}

    return (
        <div>
            <h1>BattleField</h1>
            <button onClick={battle}>Battle!</button>
            {twoBattlers.length === 2 ? displayBattle(battlers) : <h1>Upcoming Battle</h1> }
        </div>
    )
}

export default BattleField