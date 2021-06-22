import Grid from '@material-ui/core/Grid';
import PokeCard from "./PokeCard"
import WarriorCard from './WarriorCard';

function Warriors({warriors, setWarriors, pokeList})
{
    let warriorCards = warriors.map((pokemon)=> 

    <Grid item xs={6} sm={3} key={pokemon[0].name}>
        <WarriorCard id={pokeList.results.indexOf(pokemon[0])} name={pokemon[0].name} url={pokemon.url} setWarriors={setWarriors}/>
    </Grid>
    )
    return (
        <div>
            <Grid container spacing={3}>
                {warriorCards}
            </Grid>
        </div>
    )
}
export default Warriors