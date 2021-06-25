import { Card } from '@material-ui/core'

function HallOfFameCard ({name, id, position, wins}) {
    return (
        <Card variant="outlined">
        <h3 style={{fontFamily:'Copperplate'}}>{name.toUpperCase()}</h3>
        <img src={position === 0 ?`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        <h4 style={{fontFamily:'Copperplate'}}>All-Time Wins: {wins}</h4>
        </Card>
    )

}
export default HallOfFameCard