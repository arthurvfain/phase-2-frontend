import {Card} from '@material-ui/core'

function PokeCard({name, url}) {

    
    
    let frontImageURL
    let backImageURL
    fetch(url).then(res => res.json()).then(data => {
   
       console.log(data.sprites.front_default)
        frontImageURL = data.sprites.front_default;
        backImageURL = data.sprites.back_default;
    })
    
    // function frontImage(){
    //     return frontImageURL}

while (frontImageURL === ''){
    return <p>Loading...</p>
}
{
    return (
        <Card>
        <p>{name}</p>
        <img src={frontImageURL} />
        </Card>
    )
}
}

export default PokeCard;