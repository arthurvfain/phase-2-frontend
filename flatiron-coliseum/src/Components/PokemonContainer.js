import Grid from '@material-ui/core/Grid';
import PokeCard from "./PokeCard"
import Filter from './Filter';
import { useState } from "react"

function PokemonContainer({ pokeList, selectWarrior })
{
    const [filterInput, setFilterInput] = useState("")

    function handleSearch (e) {
        setFilterInput(e.target.value)
    }

    let filterList = pokeList.filter(element => element.name.toLowerCase().includes(filterInput.toLowerCase())) 
    let pokeCards = filterList.map((pokemon)=>
    <Grid item xs={6} sm={3} key={pokemon.name}>
        <PokeCard id={parseFloat(pokemon.url.slice(34))} name={pokemon.name} selectWarrior={selectWarrior}/>
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