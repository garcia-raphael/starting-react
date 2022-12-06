import Button from 'react-bootstrap/Button';

const PokemonRow = ({pokemon, onSelect}) => (
    <tr>
      <td>{pokemon.name['english']}</td>
      <td>{pokemon.type.join('/')}</td>
      <td>
        <Button className='btn btn-primary' onClick={() => onSelect(pokemon)}>
          Select!
        </Button>
      </td>
    </tr>
  );

export default PokemonRow;