function Filter({filterInput, handleSearch}) {

    return (
        <form>
            <input type='text' value={filterInput} onChange={handleSearch} />
        </form>
    )
}
export default Filter