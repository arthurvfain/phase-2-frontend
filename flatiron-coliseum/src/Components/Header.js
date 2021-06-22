
import { NavLink } from "react-router-dom";

function Header () {
    return(    
        <header> 
            <h1>Flatiron Coliseum</h1>
            
            <nav>
                <NavLink to='/BattleField' exact>To BattleField</NavLink>
                
                <NavLink to='/PokemonContainer' exact>Choose Your Warriors</NavLink>
            </nav>
        </header>
        
        )
}
export default Header