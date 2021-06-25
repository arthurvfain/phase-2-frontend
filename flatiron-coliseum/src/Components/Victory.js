import { Card, Grid } from "@material-ui/core";
function Victory({winner})
{
    let id = parseFloat(winner.url.slice(34))
    return (
        <div>
            <h1 style={{fontFamily:'Cinzel'}}>The Winner is</h1>
            <Card style={{backgroundImage: 'url(https://cdn1.vectorstock.com/i/1000x1000/92/35/fireworks-arc-on-starry-night-sky-vector-31919235.jpg)', backgroundPositionY: `50%`}}>
                <h1 style={{fontFamily:'Cinzel', color: 'white'}}>{winner.name.toUpperCase()}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={winner.name} height= '10%' width='10%'/>
                <br/>
            </Card>
        </div>
    )
}

export default Victory;