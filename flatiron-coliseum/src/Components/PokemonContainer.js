import Grid from '@material-ui/core/Grid';
import PokeCard from "./PokeCard"
import Filter from './Filter';
import { useState } from "react"

function PokemonContainer({ pokeList })
{
    const [filterInput, setFilterInput] = useState("")

    function handleSearch (e) {
        setFilterInput(e.target.value)
    }
    let filterList = pokeList.results.filter(element => element.name.toLowerCase().includes(filterInput.toLowerCase()))
    
    let pokeCards = filterList.map((pokemon)=>
    <Grid item xs={6} sm={3} key={pokemon.name}>
        <PokeCard id={pokeList.results.indexOf(pokemon)} name={pokemon.name} url={pokemon.url} />
    </Grid>)
    
    return (
        <div>
            <h1>Pokemon Warriors</h1>
            <Filter handleSearch={handleSearch} filterInput={filterInput}/>
            <hr/>
            <Grid container spacing={3}>
                {pokeCards}
            </Grid>
        </div>
    )
}

export default PokemonContainer