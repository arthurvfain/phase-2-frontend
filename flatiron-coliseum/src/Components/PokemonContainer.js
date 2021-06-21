import Grid from '@material-ui/core/Grid';
import PokeCard from "./PokeCard"
import Filter from './Filter';

function PokemonContainer({ pokeList, filterInput, handleSearch })
{

   
    let pokeCards = pokeList.results.map((pokemon)=>
    <Grid item xs='6' sm='3'>
    
    <PokeCard id={pokeList.results.indexOf(pokemon)} name={pokemon.name} url={pokemon.url}/>
   
    </Grid>)
    return (
        <div>
            <header>Pokemon Warriors</header>

            <Filter handleSearch={handleSearch} filterInput={filterInput}/>

        <Grid container spacing='3'>
            {pokeCards}
        </Grid>
        </div>
    )
}

export default PokemonContainer