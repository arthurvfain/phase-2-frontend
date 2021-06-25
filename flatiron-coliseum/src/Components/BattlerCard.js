import { Card } from '@material-ui/core'

function BattlerCard ({name, id, position, wins}) {
    return (
        <Card>
            <h3 style={{fontFamily:'Cinzel'}}>{name.toUpperCase()}</h3>
            <img src={position === 0 ?`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        </Card>
    )

}
export default BattlerCard