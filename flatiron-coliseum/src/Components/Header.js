import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

function Header () {
    return(    
        <header> 
            <img src='https://fontmeme.com/permalink/210624/f76e565b296fd522a525e1f734845036.png'/>
            
            <nav>
                <Button component={NavLink} to='/Coliseum' exact variant="contained" color="primary">To Coliseum!</Button>
                <Button component={NavLink} to='/HallOfFame' exact variant="contained" color="primary">To Hall Of Fame!</Button>
            </nav>
            <hr/>
        </header>
        
    )
}
export default Header