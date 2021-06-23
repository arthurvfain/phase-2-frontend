import Grid from '@material-ui/core/Grid';
import WarriorCard from './WarriorCard';

function Warriors({warriors, returnHome})
{
    let warriorCards = warriors.map((pokemon)=> 

    <Grid item xs={6} sm={3} key={pokemon.name}>
        <WarriorCard id={parseFloat(pokemon.url.slice(34))} name={pokemon.name} url={pokemon.url} returnHome={returnHome}/>
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