import {Card} from '@material-ui/core'
function BattlerCard ({name, id}) {

    return (
        <Card>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt={name} />
        <br/>
        </Card>
    )

}
export default BattlerCard