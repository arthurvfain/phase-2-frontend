
import { NavLink } from "react-router-dom";

function Header () {
    return(    
        <header> 
            <h1>Flatiron Coliseum</h1>
            
            <nav>
                <NavLink to='/BattleField' exact>To BattleField</NavLink>
                <br/>
                <NavLink to='/HallOfFame' exact>To Hall Of Fame!</NavLink>
                <br/>
                <NavLink to='/PokemonContainer' exact>Choose Your Warriors</NavLink>
            </nav>
            <hr/>
        </header>
        
        )
}
export default Header