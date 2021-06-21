import {Card} from '@material-ui/core'

function PokeCard({name, url}) {

    
    function getPokemon()
    {
        let pokemon;
        fetch(url).then(res => res.json()).then(data => pokemon = data)
        return pokemon;
    }
    
    let pokeObj = getPokemon()
    //{name: pokemon.name, frontUrl: pokemon.sprites.front_default, backUrl: pokemon.sprites.back_default}
    
    // let frontImageURL
    // let backImageURL
    // fetch(url).then(res => res.json()).then(data => {
   
    //    console.log(data.sprites.front_default)
    //     frontImageURL = data.sprites.front_default;
    //     backImageURL = data.sprites.back_default;
    // })
    
    // function frontImage(){
    //     return frontImageURL}
    console.log(pokeObj)

// while (frontImageURL === ''){
//     return <p>Loading...</p>
// }
// {
    return (
        <Card>
        <p>{name}</p>
        {/* <img src={pokeObj.frontUrl} /> */}
        </Card>
    )
// }
}

export default PokeCard;