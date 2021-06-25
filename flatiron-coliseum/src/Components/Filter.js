import {TextField, Avatar, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));

function Filter({filterInput, handleSearch}) {

    const classes = useStyles();
   
    return (
        <form>
            {/* <TextField style={{backgroundColor: 'white', borderRadius: '5px'}} id="outlined-basic" label="PokéSearch" InputProps={{disableUnderline: true, }}  value={filterInput} onChange={handleSearch} /> */}
            <TextField style={{backgroundColor: 'white', borderRadius: '5px'}} label="PokéSearch" value={filterInput} onChange={handleSearch} InputProps={{disableUnderline: true, startAdornment: (<InputAdornment position="start"><Avatar className={classes.small} alt="poke" src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png" /></InputAdornment>),}}/>
        </form>
    )
}
export default Filter