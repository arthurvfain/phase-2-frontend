import {Card} from '@material-ui/core'
import { Chip } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

function WarriorCard({name, id, returnHome}) {

    function handleClick(e)
    {
        returnHome(name)
    }

     return (
        <Card>
        <h3 style={{fontFamily:'Copperplate'}}>{name.toUpperCase()}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        <Chip onClick={handleClick} label="Return Home" clickable color="primary" avatar={<Avatar alt="poke" src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png" />} />
        </Card>
    )
}

export default WarriorCard;