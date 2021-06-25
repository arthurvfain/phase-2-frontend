import {Card, Chip, Avatar} from '@material-ui/core'

function PokeCard({name, id, selectWarrior}) {



    function handleClick()
    {
        selectWarrior(name)
    }

     return (
        <Card style={{margin: '10px'}}>      
            <h3 style={{fontFamily:'Cinzel'}}>{name.toUpperCase()}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
            <br/>
            <Chip onClick={handleClick} label="Send Poke to Battle" clickable color="primary" avatar={<Avatar alt="poke" src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png" />}/>
        </Card>
    )
}

export default PokeCard;