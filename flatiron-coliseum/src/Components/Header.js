import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom";

function Header () {
    return(    
        <header style={{backgroundImage: `url("https://ssb.wiki.gallery/images/7/73/SSBU-Pok%C3%A9mon_Stadium.png")`, backgroundSize: `100%`, backgroundPositionY: `65%` }}> 
            <img src='https://fontmeme.com/permalink/210624/f76e565b296fd522a525e1f734845036.png' alt='battleStage' style={{paddingTop: `10px`,paddingBottom: `100px`}}/>
            <nav>
                <Chip component={NavLink} to='/Coliseum' exact label="To Coliseum!" clickable color="primary" avatar={<Avatar alt="poke" src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png" />}/>
                <Chip component={NavLink} to='/HallOfFame' exact label="To Hall Of Fame!" clickable color="primary" avatar={<Avatar alt="poke" src="https://e7.pngegg.com/pngimages/7/208/png-clipart-poke-ball-pokemon-gold-and-silver-pokemon-orange-logo.png" />}/>
            </nav>
            <hr/>
        </header>
        
    )
}
export default Header