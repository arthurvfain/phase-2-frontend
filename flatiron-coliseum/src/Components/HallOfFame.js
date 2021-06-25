import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import HallOfFameCard from './HallOfFameCard';

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
            winners.push({...element, wins: 1})
        } else {
            winners.find(({name}) => name === element.name ).wins++
        }
   
    })

   let sortedWinners = winners.sort((a,b) => {
        if (a.wins < b.wins) {
            return 1
        }
        if (a.wins > b.wins) {
            return -1
        } else {
            return 0
        }
    })

    let display = sortedWinners.map(element => 
            <Grid key={element.name} item xs={6} sm={3}>
                <HallOfFameCard id={parseFloat(element.url.slice(34))} name={element.name} wins={element.wins}/>
            </Grid>)

    return (
        <div style={{backgroundImage: `url("https://cdn2.bulbagarden.net/upload/8/8b/Hall_of_Fame_PO.png")`, backgroundSize: `100%`, backgroundAttachment: 'fixed', backgroundPositionY: `65%`}}>
        <h1 style={{fontFamily:'Copperplate'}}>Hall of Fame!</h1>
        <Grid container spacing={10}>
            {display}
        </Grid>
        </div>
    )
}

export default HallOfFame