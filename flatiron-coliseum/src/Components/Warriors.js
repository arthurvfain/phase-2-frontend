import Grid from '@material-ui/core/Grid';
import PokeCard from "./PokeCard"

function Warriors({warriors, setWarriors})
{
    let warriorCards = warriors.map((pokemon)=>
    <Grid item xs={6} sm={3} key={pokemon.name}>
        <PokeCard id={warriors.results.indexOf(pokemon)} name={pokemon.name} url={pokemon.url} setWarriors={setWarriors}/>
    </Grid>)
    
    return (
        <div>
            <Grid container spacing={3}>
                {warriorCards}
            </Grid>
        </div>
    )
}
export default Warriors