import {Card} from '@material-ui/core'
function BattlerCard ({name, id, position}) {
    return (
        <Card>
        <p>{name}</p>
        <img src={position === 0 ?`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <br/>
        </Card>
    )

}
export default BattlerCard