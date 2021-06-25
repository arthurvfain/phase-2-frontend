import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BattlerCard from "./BattlerCard"
import { Chip, Avatar } from '@material-ui/core';

function Fight({contestants, warriors, pokeList, setPokemon})
{
    function displayBattle(battlers)
    {
        let twoCards = battlers.map(battler => 
            <Grid item xs={6} sm={3} key={battler.name}>
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
            <Grid container spacing={2} justify= 'center'>
                {displayBattle(contestants)}
            </Grid>
            <Chip component={Link} onClick={theBattle} to='/Victory' exact label="Fight!" clickable color="primary" avatar={<Avatar alt="poke" src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png" />}/>
        </div>
    )
}

export default Fight;