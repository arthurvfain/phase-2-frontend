import TextField from '@material-ui/core/TextField';

function Filter({filterInput, handleSearch}) {

    return (
        <form>
            <TextField style={{backgroundColor: 'white'}} id="outlined-basic" label="PokéSearch"  value={filterInput} onChange={handleSearch} />
        </form>
    )
}
export default Filter