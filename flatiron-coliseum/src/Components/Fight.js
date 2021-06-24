import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BattlerCard from "./BattlerCard"

function Fight({contestants, warriors, pokeList, setPokemon})
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
            setPokemon({battlers: [], warriors:[...warriors],pokeList:[...pokeList, ...contestants], winner: [contestants[0]]})
        } else {
            setPokemon({battlers: [], warriors:[...warriors],pokeList:[...pokeList, ...contestants], winner: [contestants[1]]})
        }
    }

    return (
        <div>
            <Grid container spacing={2}>
                {displayBattle(contestants)}
            </Grid>
            <Button component={Link} onClick={theBattle} to='/Victory' variant="contained" color="primary"  >Fight !</Button>
        </div>
    )
}

export default Fight;