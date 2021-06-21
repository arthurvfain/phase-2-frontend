import {Card} from '@material-ui/core'
import {useState} from 'react'

function PokeCard({name, id}) {

    const [toggled, setToggled] = useState(false)

    function handleClick()
    {setToggled(toggled => !toggled)}

     return (
        <Card>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`} alt={name} />
        <br/>
        {toggled ? <button onClick={handleClick}> Return Home </button> : <button onClick={handleClick}> Send this Poke to Battle</button>
        }
        </Card>
    )
// }
}

export default PokeCard;