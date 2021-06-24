import {Card} from '@material-ui/core'
import {useState} from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

function PokeCard({name, id, selectWarrior}) {



    function handleClick(e)
    {
        selectWarrior(name)
    }

     return (
        <Card >
        
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        <Chip onClick={handleClick} label="Send Poke to Battle" clickable color="primary" avatar={<Avatar alt="poke" src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png" />}/>
 
        </Card>
    )
}

export default PokeCard;