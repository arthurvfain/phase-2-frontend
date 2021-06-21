import TextField from '@material-ui/core/TextField';

function Filter({filterInput, handleSearch}) {

    return (
        <form>
            <TextField id="outlined-basic" label="PokéSearch" variant="outlined" value={filterInput} onChange={handleSearch} />
        </form>
    )
}
export default Filter