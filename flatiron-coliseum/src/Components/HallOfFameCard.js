import {Card} from '@material-ui/core'
function HallOfFameCard ({name, id, position, wins}) {
    return (
        <Card>
        <p>{name}</p>
        <img src={position === 0 ?`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        <h3>All-Time Wins: {wins}</h3>
        </Card>
    )

}
export default HallOfFameCard