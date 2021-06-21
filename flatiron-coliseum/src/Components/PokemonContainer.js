import Grid from '@material-ui/core/Grid';
import PokeCard from "./PokeCard"
function PokemonContainer({ pokeList })
{
    console.log(pokeList)
    let pokeCards = pokeList.results.map((pokemon)=><PokeCard pokemon={pokemon}/>)
    return (
        <Grid container spacing={2}>
            {pokeCards}
        </Grid>
    )
}

export default PokemonContainer