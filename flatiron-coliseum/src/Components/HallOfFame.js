import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import BattlerCard from './BattlerCard';

function HallOfFame() {

    const [previousWinners, setPreviousWinners] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/battles`)
        .then(res => res.json())
        .then(data => setPreviousWinners(data))
    }, [])

    let simpleWinners = previousWinners.map(element=>{return {name: element.name, url: element.url}})

    let winners = []
    
    simpleWinners.forEach(element=>{

        if (!winners.some(winner=>winner.name === element.name))
        {
            winners.push(element)
        }
    })

    
    //previousWinners.reduce(mergeWinners, winners)
    
    //simpleWinners.filter(element=>winners.some(winner=>winner.name === element.name))
    //console.log(simpleWinners)
    //console.log(winners)

        

    let display = winners.map(element => 
            <Grid key={element.name} item xs={6} sm={3}>
                <BattlerCard id={parseFloat(element.url.slice(34))} name={element.name} />
            </Grid>)

    return (
        <div>
        <h1>Below is your Hall of fame!</h1>
        <Grid container spacing={3}>
            {display}
        </Grid>
        </div>
    )
}

export default HallOfFame