import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import BattlerCard from "./BattlerCard"

function Fight({contestants, winner, setWinner})
{
    function displayBattle(battlers)
    {
        let twoCards = battlers.map(battler => 
            <Grid item xs={12} sm={6} key={battler.name}>
                <BattlerCard name={battler.name} id={parseFloat(battler.url.slice(34))} position={battlers.indexOf(battler)} />
            </Grid>
        )
        return(twoCards)
    }
    
    function theBattle()
    {
        let random = Math.random()
        if (random > .5)
        {
            setWinner(contestants[0])
        } else {
            setWinner(contestants[1])
        }
    }

    return (
        <div>
            <Grid container spacing={2}>
                {displayBattle(contestants)}
            </Grid>
            {/* <button >Fight!</button> */}
            <Link onClick={theBattle} to='/Victory' >Fight !</Link>
        </div>
    )
}

export default Fight;