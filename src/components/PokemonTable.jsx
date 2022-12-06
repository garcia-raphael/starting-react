import PokemonRow from './PokemonRow';

const PokemonTable = ({pokemon, filter, selectedItemSet}) => (
    <table width="100%">
        <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {pokemon
            .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
            .slice(0, 50)
            .map((pokemon) => (
              <PokemonRow key={pokemon.id} pokemon={pokemon} onSelect = {(pokemon) => selectedItemSet(pokemon)}/>
            ))}
        </tbody>
    </table>
)

export default PokemonTable;