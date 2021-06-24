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
        console.log(element)
        if (winners.includes(element) === false)
        {
            winners.push(element)
        }
    })
    
    //console.log(simpleWinners)
    //console.log(winners)
    // function mergeWinners()
    // {

    // }
        
    // previousWinners.reduce(mergeWinners, winners)

        let display = previousWinners.map(element => 
                <Grid item xs={6} sm={3}>
                    <BattlerCard id={parseFloat(element.url.slice(34))} name={element.name} />
                </Grid>)
        //console.log(previousWinners)

        return (
            <Grid container spacing={3}>
                {display}
            </Grid>
        )
}

export default HallOfFame