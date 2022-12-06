const PokemonFilter = ({filter, filterSet}) => (
    <div>
        <label htmlFor="search">Search a pokemon</label>
        <br />
        <input 
        name='search' 
        value={filter} 
        onChange={(text) => filterSet(text.target.value)}/>
    </div>
    
)

export default PokemonFilter;