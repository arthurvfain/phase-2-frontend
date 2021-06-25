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
            {warriors.length % 2 === 0 && warriors.length !== 0 ? <h4 style={{fontFamily:'Cinzel'}}>Ready for Battle!</h4> : <h4 style={{fontFamily:'Cinzel'}}> Choose More Warriors</h4>}
            <Grid container spacing={3}>
                {warriorCards}
            </Grid>
        </div>
    )
}
export default Warriors