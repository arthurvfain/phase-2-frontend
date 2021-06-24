import {Card} from '@material-ui/core'

function WarriorCard({name, id, returnHome}) {

    function handleClick(e)
    {
        returnHome(name)
    }

     return (
        <Card>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        <button onClick={handleClick}> Return Home </button> 
        </Card>
    )
}

export default WarriorCard;