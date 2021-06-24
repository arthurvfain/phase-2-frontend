import {Card} from '@material-ui/core'
import {useState} from 'react'

function PokeCard({name, id, selectWarrior}) {

    const [toggled, setToggled] = useState(false)

    function handleClick(e)
    {
        setToggled(toggled => !toggled)
        selectWarrior(name)
    }

     return (
        <Card>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        {toggled ? <button onClick={handleClick}> Return Home </button> : <button onClick={handleClick}> Send this Poke to Battle</button>
        }
        </Card>
    )
}

export default PokeCard;