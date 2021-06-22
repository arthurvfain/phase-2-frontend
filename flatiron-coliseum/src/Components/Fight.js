import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
// import BattlerCard from "./BattlerCard"

function Fight({contestants})
{
    return (
        <div>
            <Grid container spacing={2}>
                {contestants}
            </Grid>
            {/* <button >Fight!</button> */}
            <Link to='/Victory' exact>Fight !</Link>
        </div>
    )
}

export default Fight;