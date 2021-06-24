import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

function Header () {
    return(    
        <header> 
            <h1>Flatiron Coliseum</h1>
            
            <nav>
                <Button component={NavLink} to='/Coliseum' exact variant="contained" color="primary">To Coliseum!</Button>
                <Button component={NavLink} to='/HallOfFame' exact variant="contained" color="primary">To Hall Of Fame!</Button>
                {/* <br/>
                <Button component={NavLink} to='/BattleField' exact variant="contained" color="primary">To BattleField</Button>
                <Button component={NavLink} to='/PokemonContainer' exact variant="contained" color="primary">Choose Your Warriors</Button> */}
            </nav>
            <hr/>
        </header>
        
        )
}
export default Header