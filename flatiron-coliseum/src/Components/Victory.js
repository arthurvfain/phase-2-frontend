import { Card } from "@material-ui/core";
function Victory({winner})
{
    let id = parseFloat(winner.url.slice(34))
    return (
        <div>
            <h1>The Winner is !</h1>
            <Card>
                <p>{winner.name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={winner.name} />
                <br/>
            </Card>
        </div>
    )
}

export default Victory;